import db from "../database/models";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { edu_user_types } = db;
const { ok, created } = statusCode;

export const createEduUserType = catchAsync(async (req, res) => {
  const { name } = req.body;
  const userTypes = await edu_user_types.create({ name });

  return successResponse(res, created, userTypes);
});

export const updateEduUserType = catchAsync(async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  const userTypes = await edu_user_types.update(
    {
      name,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );

  return successResponse(res, ok, userTypes);
});
