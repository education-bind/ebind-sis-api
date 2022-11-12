import Joi from "joi";
import AppError from "./appError";
import catchAsync from "./catchAsync";
import statusCode from "../utils/statusCodes";

const { badRequest } = statusCode;

async function validator(schema, data, next) {
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
}

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

  validator(schema, data, next);
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

  validator(schema, data, next);
});

export const validateEduPermission = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  validator(schema, data, next);
});
export const validateNotificationTypes = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  validator(schema, data, next);
});

export const validateEduLanguage = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    abbreviation: req.body.abbreviation,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
    abbreviation: Joi.string().required(),
  });

  validator(schema, data, next);
});

export const validateUpdateEduLanguage = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    abbreviation: req.body.abbreviation,
  };
  const schema = Joi.object({
    name: Joi.string(),
    abbreviation: Joi.string(),
  });

  validator(schema, data, next);
});

export const validateEduUserTypes = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  validator(schema, data, next);
});

export const validateSchool = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    abbreviation: req.body.abbreviation,
    country: req.body.country,
    city: req.body.city,
    admin: req.body.admin,
    regDate: req.body.regDate,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    description: req.body.description,
    logoImage: process.env.NODE_ENV === "test" ? req.body.logoImage : req.file,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
    abbreviation: Joi.string().required(),
    country: Joi.number().required(),
    city: Joi.string().required(),
    admin: Joi.number().required(),
    regDate: Joi.date().required(),
    email: Joi.string().email(),
    phoneNumber: Joi.number(),
    description: Joi.string(),
    logoImage: Joi.any(),
    latitude: Joi.string(),
    longitude: Joi.string(),
  });

  validator(schema, data, next);
});

export const validateUpdateSchool = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    abbreviation: req.body.abbreviation,
    country: req.body.country,
    city: req.body.city,
    admin: req.body.admin,
    regDate: req.body.regDate,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    description: req.body.description,
    logoImage: req.file,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  const schema = Joi.object({
    name: Joi.string(),
    abbreviation: Joi.string(),
    country: Joi.number(),
    city: Joi.string(),
    admin: Joi.number(),
    regDate: Joi.date(),
    email: Joi.string().email(),
    phoneNumber: Joi.number(),
    description: Joi.string(),
    logoImage: Joi.any(),
    latitude: Joi.string(),
    longitude: Joi.string(),
  });

  validator(schema, data, next);
});

export const validateEduFaculties = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    country: req.body.country,
    description: req.body.description,
    logoImage: process.env.NODE_ENV === "test" ? req.body.logoImage : req.file,
    abbreviation: req.body.abbreviation,
  };
  const schema = Joi.object({
    name: Joi.string().required(),
    country: Joi.number().required(),
    description: Joi.string().required(),
    logoImage: Joi.any().required(),
    abbreviation: Joi.string().required(),
  });

  validator(schema, data, next);
});

export const validateUpdateEduFaculties = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    country: req.body.country,
    description: req.body.description,
    logoImage: req.file,
    abbreviation: req.body.abbreviation,
  };
  const schema = Joi.object({
    name: Joi.string(),
    country: Joi.number(),
    description: Joi.string(),
    logoImage: Joi.any(),
    abbreviation: Joi.string(),
  });

  validator(schema, data, next);
});
export const validateEduAnnouncements = catchAsync(async (req, res, next) => {
  const data = {
    title: req.body.title,
    message: req.body.message,
    link: req.body.link,
    publish: req.body.publish,
  };
  const schema = Joi.object({
    title: Joi.string().required(),
    message: Joi.string().required(),
    link: Joi.string().required(),
    publish: Joi.boolean(),
  });

  validator(schema, data, next);
});

export const validateUpdateEduAnnouncements = catchAsync(
  async (req, res, next) => {
    const data = {
      title: req.body.title,
      message: req.body.message,
      link: req.body.link,
      publish: req.body.publish,
    };
    const schema = Joi.object({
      title: Joi.string(),
      message: Joi.string(),
      link: Joi.string(),
      publish: Joi.boolean(),
    });

    validator(schema, data, next);
  }
);
