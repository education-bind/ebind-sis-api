import Joi from "joi";
import AppError from "./appError";
import catchAsync from "./catchAsync";
import statusCode from "../utils/statusCodes";
import messages from "../utils/customMessages";

const { badRequest } = statusCode;
const { } = messages;

export const validateCountry = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    extension: req.body.extension,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    code: req.body.code,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
    extension: Joi.string().min(2).max(2).required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    code: Joi.number().required(),
  });

  const validator = await schema.validate(data, {
    abortEarly: false,
  });
  const { error } = validator;

  if (error) {
    const { details } = error;
    const messages = details
      .map((err) => err.message.replace(/['"]/g, ""))
      .join(", ");

    return next(new AppError(messages, badRequest));
  }

  return next();
});
export const validateUpdateCountry = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    extension: req.body.extension,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    code: req.body.code,
  };
  const schema = Joi.object({
    name: Joi.string(),
    extension: Joi.string().min(2).max(2),
    latitude: Joi.number(),
    longitude: Joi.number(),
    code: Joi.number(),
  });

  const validator = await schema.validate(data, {
    abortEarly: false,
  });
  const { error } = validator;

  if (error) {
    const { details } = error;
    const messages = details
      .map((err) => err.message.replace(/['"]/g, ""))
      .join(", ");

    return next(new AppError(messages, badRequest));
  }

  return next();
});

export const validateEduPermission = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const validator = await schema.validate(data, {
    abortEarly: false,
  });
  const { error } = validator;

  if (error) {
    const { details } = error;
    const messages = details
      .map((err) => err.message.replace(/['"]/g, ""))
      .join(", ");

    return next(new AppError(messages, badRequest));
  }

  return next();
});

export const validateEduLanguage = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const validator = await schema.validate(data, {
    abortEarly: false,
  });
  const { error } = validator;

  if (error) {
    const { details } = error;
    const messages = details
      .map((err) => err.message.replace(/['"]/g, ""))
      .join(", ");

    return next(new AppError(messages, badRequest));
  }

  return next();
});

export const validateEduUserTypes = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const validator = await schema.validate(data, {
    abortEarly: false,
  });
  const { error } = validator;

  if (error) {
    const { details } = error;
    const messages = details
      .map((err) => err.message.replace(/['"]/g, ""))
      .join(", ");

    return next(new AppError(messages, badRequest));
  }

  return next();
});
