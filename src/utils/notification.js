import db from "../database/models";
import { successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { notifications } = db;
const { created } = statusCode;

export const createNotification = async (
  title,
  message,
  userId,
  link,
  notificationTypeId = 1
) => {
  const notification = await notifications.create({
    userId,
    title,
    link,
    message,
    notificationTypeId,
  });

  return successResponse(res, created, notification);
};
