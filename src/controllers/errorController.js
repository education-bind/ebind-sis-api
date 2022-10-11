import {
  sendErrorDev,
  sendErrorProd,
  handleSequelizeUniqueConstraintError,
} from "../utils/handleErrors";
import statusCode from "../utils/statusCodes";

const { serverError } = statusCode;

export default (err, req, res, _) => {
  err.statusCode = err.statusCode || serverError;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "test"
  ) {
    let error = { ...err };
    error.message = err.message;

    if (err.name === "SequelizeUniqueConstraintError")
      error = handleSequelizeUniqueConstraintError(err);

    sendErrorProd(error, req, res);
  }
};
