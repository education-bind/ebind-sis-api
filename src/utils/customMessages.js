const messages = {
  serverErrorMessage:
    "Sorry, something went wrong on our end, please try again later",
  wrongDatabase: "Specify an existing database name",
  invalidImage: "Not an image! Please upload only images.",
  endpointNotFound: "The requested resource was not found",
  noContent: "The content you requested was not found",
  contentDeleted: "Content deleted successfully!",
  loginEmailUnauthorized: "Sorry, wrong email or password",
  loginUsernameUnauthorized: "Sorry, wrong username or password",
  loginEmailOrUsernameEmpty: "Please enter your email or username",
  loginPasswordEmpty: "Please enter your password",
  tokenMissing: "Authentication failed. Token is missing",
  refreshTokenMissing: "Authentication failed. Refresh token is missing",
  refreshTokenMissingInStore:
    "Authentication failed. Refresh token is missing in store",
  accessTokenInvalid: "Your access token is invalid or expired",
  refreshTokenNotSame: "Your refresh token is not the same as the one in store",
  JWTError: "Invalid token. Please login again!",
  logoutMessage: "Logged out successfully!",
  userNoLongerExist: "The user belonging to this token does no longer exist",
  JWTExpiredError: "Your token has expired! Please login again.",
  loginPasswordAndEmailOrUsernameEmpty:
    "Please enter your email or username and your password",
  accountNotVerified:
    "Sorry, we were unable to verify your identity, please verify your account",
};

export default messages;
