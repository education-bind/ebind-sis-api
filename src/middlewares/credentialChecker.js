import bcryptjs from "bcryptjs";
import statusCode from "../utils/statusCodes";
import messages from "../utils/customMessages";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import db from "../database/models";
import { userExtraInfo } from "../services/user.service";

const { edu_users, edu_user_types, countries } = db;

const { badRequest, unAuthorized } = statusCode;

const {
  loginPasswordAndEmailOrUsernameEmpty,
  loginPasswordEmpty,
  loginEmailOrUsernameEmpty,
  loginUsernameUnauthorized,
  loginEmailUnauthorized,
} = messages;

export const bothEmailAndPasswordExist = (req, res, next) => {
  const { email, password, username } = req.body;
  if (email || password || username) {
    next();
  } else {
    next(new AppError(loginPasswordAndEmailOrUsernameEmpty, badRequest));
  }
};

export const loginDataExistOnByOne = (req, res, next) => {
  const { email, password, username } = req.body;
  if (email || username) {
    if (password) {
      return next();
    }
    return next(new AppError(loginPasswordEmpty, badRequest));
  }
  return next(new AppError(loginEmailOrUsernameEmpty, badRequest));
};

export const verifyCredentials = catchAsync(async (req, res, next) => {
  const { email, password, username } = req.body;

  const gottenUser = await edu_users.findOne({
    where: username ? { userName: username } : { email },
    include: [
      {
        model: countries,
        as: "communityCountry",
        attributes: { exclude: ["createdAt", "updatedAt", "active"] },
      },
      {
        model: edu_user_types,
        as: "userType",
        attributes: { exclude: ["createdAt", "updatedAt", "active"] },
      },
    ],
    attributes: {
      exclude: [
        "userTypeId",
        "communityCountryId",
        "passwordChangedAt",
        "passwordResetToken",
        "passwordResetExpires",
        "twoFA",
        "fixedNavBar",
        "darkMode",
        "miniSidenav",
        "sidenavColor",
        "sidenavType",
        "active",
        "updatedAt",
        "createdAt",
      ],
    },
  });
  if (!gottenUser)
    return next(
      new AppError(
        username ? loginUsernameUnauthorized : loginEmailUnauthorized,
        unAuthorized
      )
    );

  const { dataValues } = gottenUser;
  const passwordFromDb = dataValues.password;

  if (await bcryptjs.compare(password, passwordFromDb)) {
    const moreInfo = await userExtraInfo(
      dataValues.userType.name,
      dataValues.id
    );

    dataValues.moreInfo = moreInfo;
    dataValues.password = undefined;

    req.foundUser = dataValues;

    next();
  } else {
    next(
      new AppError(
        username ? loginUsernameUnauthorized : loginEmailUnauthorized,
        unAuthorized
      )
    );
  }
});
