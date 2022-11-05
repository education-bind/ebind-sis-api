import db from "../database/models";
import catchAsync from "../utils/catchAsync";
import { fileUpload } from "../utils/multer";
import { successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { schools } = db;
const { ok, created } = statusCode;

export const createSchool = catchAsync(async (req, res) => {
  req.body.logoImage = await fileUpload(req);
  const {
    country,
    city,
    name,
    abbreviation,
    admin,
    regDate,
    email,
    phoneNumber,
    description,
    logoImage,
    longitude,
    latitude,
  } = req.body;
  const school = await schools.create({
    countryId: country,
    city,
    name,
    abbreviation,
    adminId: admin,
    regDate,
    email,
    phoneNumber,
    description,
    logoImage,
    longitude,
    latitude,
  });

  return successResponse(res, created, school);
});

export const updateSchool = catchAsync(async (req, res) => {
  if (req.file) req.body.logoImage = await fileUpload(req);
  const id = req.params.id;
  const {
    country,
    city,
    name,
    abbreviation,
    admin,
    regDate,
    email,
    phoneNumber,
    description,
    logoImage,
    longitude,
    latitude,
  } = req.body;

  const school = await schools.update(
    {
      countryId: country,
      city,
      name,
      abbreviation,
      adminId: admin,
      regDate,
      email,
      phoneNumber,
      description,
      logoImage,
      longitude,
      latitude,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );

  return successResponse(res, ok, school);
});
