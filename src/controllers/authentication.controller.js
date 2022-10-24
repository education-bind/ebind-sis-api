import catchAsync from "../utils/catchAsync";
import { deleteResponse, successResponse } from "../utils/responseHandlers";
import { generateToken } from "../utils/authentication";
import statusCode from "../utils/statusCodes";
import messages from "../utils/customMessages";
import { deleteToken, setToken } from "../config/redis.config";

const { logoutMessage } = messages;
const { ok } = statusCode;

export const eduUserLogin = catchAsync(async (req, res, next) => {
  const { foundUser } = req;
  const tokens = await generateToken(foundUser.id);
  const data = {
    tokens,
    user: foundUser,
  };
  successResponse(res, ok, data);
});

export const getAccessToken = catchAsync(async (req, res, next) => {
  const { foundUser } = req;
  const tokens = await generateToken(foundUser.sub);

  successResponse(res, ok, tokens);
});

export const eduUserLogout = catchAsync(async (req, res, next) => {
  const { userId } = req.currentUser;
  const accessToken = req.decodedAccessToken;

  await deleteToken(userId.toString());

  await setToken(`BL_${userId.toString()}`, JSON.stringify({ accessToken }));

  return deleteResponse(res, logoutMessage);
});
