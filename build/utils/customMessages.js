"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function cov_14rgbf6mcw() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\customMessages.js";
  var hash = "f978982385e850c03af2060c4aa85159335f8194";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\customMessages.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 17
        },
        end: {
          line: 26,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f978982385e850c03af2060c4aa85159335f8194"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_14rgbf6mcw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_14rgbf6mcw();
const messages = (cov_14rgbf6mcw().s[0]++, {
  serverErrorMessage: "Sorry, something went wrong on our end, please try again later",
  wrongDatabase: "Specify an existing database name",
  endpointNotFound: "The requested resource was not found",
  noContent: "The content you requested was not found",
  contentDeleted: "Content deleted successfully!",
  loginEmailUnauthorized: "Sorry, wrong email or password",
  loginUsernameUnauthorized: "Sorry, wrong username or password",
  loginEmailOrUsernameEmpty: "Please enter your email or username",
  loginPasswordEmpty: "Please enter your password",
  tokenMissing: "Authentication failed. Token is missing",
  refreshTokenMissing: "Authentication failed. Refresh token is missing",
  refreshTokenMissingInStore: "Authentication failed. Refresh token is missing in store",
  accessTokenInvalid: "Your access token is invalid or expired",
  refreshTokenNotSame: "Your refresh token is not the same as the one in store",
  JWTError: "Invalid token. Please login again!",
  logoutMessage: "Logged out successfully!",
  userNoLongerExist: "The user belonging to this token does no longer exist",
  JWTExpiredError: "Your token has expired! Please login again.",
  loginPasswordAndEmailOrUsernameEmpty: "Please enter your email or username and your password",
  accountNotVerified: "Sorry, we were unable to verify your identity, please verify your account"
});
var _default = messages;
exports.default = _default;
module.exports = exports.default;