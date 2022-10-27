import statusCode from "../utils/statusCodes";
import messages from "../utils/customMessages";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import db from "../database/models";
import { promisify } from "util";
import { verify } from "jsonwebtoken";
import { getToken } from "../config/redis.config";

const { edu_admin_user_infos } = db;

const { unAuthorized } = statusCode;
const {
  accountNotVerified,
  userNoLongerExist,
  refreshTokenMissing,
  refreshTokenMissingInStore,
  accessTokenInvalid,
  refreshTokenNotSame,
  tokenMissing,
} = messages;

export const verifyToken = catchAsync(async (req, res, next) => {
  let token = req.get("authorization");

  if (!token) {
    return next(new AppError(tokenMissing, unAuthorized));
  }

  token = token.split(" ").pop();

  const accessToken = await promisify(verify)(
    token,
    process.env.JWT_ACCESS_SECRET
  );

  const tokenData = await getToken(`BL_${accessToken.sub.toString()}`);

  console.log('ACCESS TOKEN:', accessToken);


  if (tokenData === JSON.stringify({ accessToken }))
    return next(new AppError(accessTokenInvalid, unAuthorized));

  req.decodedAccessToken = accessToken;
  next();
});

export const verifyRefleshToken = catchAsync(async (req, res, next) => {
  let token = req.body.token;

  if (!token) {
    return next(new AppError(refreshTokenMissing, unAuthorized));
  }

  const decodedToken = await promisify(verify)(
    token,
    process.env.JWT_REFRESH_SECRET
  );

  const refreshTokenData = await getToken(decodedToken.sub.toString());

  if (refreshTokenData === null)
    return next(new AppError(refreshTokenMissingInStore, unAuthorized));

  if (JSON.parse(refreshTokenData).refreshToken !== token)
    return next(new AppError(refreshTokenNotSame, unAuthorized));

  req.foundUser = decodedToken;
  next();
});

export const isEbindUserLoggedInAndVerified = catchAsync(
  async (req, res, next) => {
    const decodedToken = req.decodedAccessToken;
    const currentUser = await edu_admin_user_infos.findOne({
      where: decodedToken.id,
    });

    if (!currentUser) {
      return next(new AppError(userNoLongerExist, unAuthorized));
    }

    if (!currentUser.isVerified) {
      return next(new AppError(accountNotVerified, unAuthorized));
    }

    req.currentUser = currentUser;
    next();
  }
);
