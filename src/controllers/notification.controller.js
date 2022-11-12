import db from "../database/models";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { notifications } = db;
const { ok } = statusCode;

export const readNotification = catchAsync(async (req, res) => {
  const id = req.params.id;

  const notification = await notifications.update(
    {
      isRead: true,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );

  return successResponse(res, ok, notification);
});
export const readNotifications = catchAsync(async (req, res) => {
  const userId = req.currentUser.userId;
  const notification = await notifications.update(
    {
      isRead: true,
    },
    {
      where: { userId },
      returning: true,
      plain: true,
    }
  );

  return successResponse(res, ok, notification);
});
