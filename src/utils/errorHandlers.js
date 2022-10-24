import AppError from "./appError";
import messages from "./customMessages";
import statusCode from "./statusCodes";

const { badRequest, unAuthorized } = statusCode;
const { JWTError, JWTExpiredError } = messages;

export const handleSequelizeUniqueConstraintError = (err) => {
  const errObj = {};
  err.errors.map((er) => {
    errObj[er.path] = er.message;
  });
  return new AppError(errObj.name, badRequest);
};

export const handleJWTError = () => new AppError(JWTError, unAuthorized);

export const handleJWTExpiredError = () =>
  new AppError(JWTExpiredError, unAuthorized);
