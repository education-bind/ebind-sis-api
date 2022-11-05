import db from "../database/models";
import catchAsync from "../utils/catchAsync";
import { fileUpload } from "../utils/multer";
import { successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { edu_faculties } = db;
const { ok, created } = statusCode;

export const createEduFaculties = catchAsync(async (req, res) => {
  req.body.logoImage = await fileUpload(req);
  const { name, country, description, logoImage, abbreviation } = req.body;
  const faculties = await edu_faculties.create({
    name,
    countryId: country,
    description,
    logoimage: logoImage,
    abbreviation,
  });

  return successResponse(res, created, faculties);
});

export const updateEduFaculties = catchAsync(async (req, res) => {
  const id = req.params.id;

  if (req.file) req.body.logoImage = await fileUpload(req);
  const { name, country, description, logoImage, abbreviation } = req.body;

  const faculties = await edu_faculties.update(
    {
      name,
      countryId: country,
      description,
      logoimage: logoImage,
      abbreviation,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );

  return successResponse(res, ok, faculties);
});
