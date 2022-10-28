import db from "../database/models";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { edu_languages } = db;
const { ok, created } = statusCode;

export const createEduLanguage = catchAsync(async (req, res) => {
  const { name, abbreviation } = req.body;
  const language = await edu_languages.create({ name, abbreviation });

  return successResponse(res, created, language);
});

export const updateEduLanguage = catchAsync(async (req, res) => {
  const id = req.params.id;
  let { name, abbreviation } = req.body;

  const language = await edu_languages.update(
    {
      name, abbreviation,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );

  return successResponse(res, ok, language);
});
