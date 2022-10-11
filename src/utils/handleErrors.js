import AppError from "./appError";
import messages from "./customMessages";
import statusCode from "./statusCodes";

const { serverError, badRequest } = statusCode;
const { serverErrorMessage, errorMessage } = messages;

export const sendErrorDev = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  console.error("ERROR 💥", err);
  return res.status(err.statusCode).render("error", {
    title: errorMessage,
    msg: err.message,
  });
};

export const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    console.error("ERROR 💥", err);

    return res.status(serverError).json({
      status: "error",
      message: serverErrorMessage,
    });
  }

  if (err.isOperational) {
    return res.status(err.statusCode).render("error", {
      title: errorMessage,
      msg: err.message,
    });
  }

  console.error("ERROR 💥", err);

  return res.status(err.statusCode).render("error", {
    title: errorMessage,
    msg: serverErrorMessage,
  });
};

export const handleSequelizeUniqueConstraintError = (err) => {
  const errObj = {};
  err.errors.map((er) => {
    errObj[er.path] = er.message;
  });
  return new AppError(errObj.name, badRequest);
};
