import db from "../database/models";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { countries } = db;
const { ok, created } = statusCode;

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
  let { name, code, extension, latitude, longitude } = req.body;

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
