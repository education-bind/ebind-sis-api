import db from "../database/models";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import messages from "../utils/customMessages";
import { deleteResponse, successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { countries } = db;
const { notFound, ok, created } = statusCode;
const { noCountry, countryDeleted } = messages;

export const getCountries = catchAsync(async (req, res) => {
  const getCountries = await countries.findAll();

  return successResponse(res, ok, getCountries);
});

export const getCountry = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const country = await countries.findOne({ where: { id } });

  if (!country) {
    return next(new AppError(noCountry, notFound));
  }

  return successResponse(res, ok, country);
});

export const createCountry = catchAsync(async (req, res) => {
  const { name, code, extension, latitude, longitude } = req.body;
  const country = await countries.create({
    name,
    code,
    extension,
    latitude,
    longitude,
  });

  return successResponse(res, created, country);
});

export const updateCountry = catchAsync(async (req, res) => {
  const id = req.params.id;
  const { name, code, extension, latitude, longitude } = req.body;
  const country = await countries.update(
    {
      name,
      code,
      extension,
      latitude,
      longitude,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );

  return successResponse(res, ok, country);
});

export const deleteCountry = catchAsync(async (req, res) => {
  const id = req.params.id;
  await countries.destroy({
    where: { id },
  });

  return deleteResponse(countryDeleted);
});
