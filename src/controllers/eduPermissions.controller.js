import db from "../database/models";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { edu_permissions } = db;
const { ok, created } = statusCode;

export const createEduPermission = catchAsync(async (req, res) => {
  const { name } = req.body;
  const permission = await edu_permissions.create({ name });

  return successResponse(res, created, permission);
});

export const updateEduPermission = catchAsync(async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  const permission = await edu_permissions.update(
    {
      name,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );

  return successResponse(res, ok, permission);
});
