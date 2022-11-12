import db from "../database/models";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/responseHandlers";
import statusCode from "../utils/statusCodes";

const { edu_announcements } = db;
const { ok, created } = statusCode;

export const createEduAnnouncement = catchAsync(async (req, res) => {
  const { title, message, link, publish } = req.body;
  const permission = await edu_announcements.create({
    title,
    message,
    link,
    publish,
  });

  return successResponse(res, created, permission);
});

export const updateEduAnnouncement = catchAsync(async (req, res) => {
  const id = req.params.id;
  const { title, message, link, publish } = req.body;
  const permission = await edu_announcements.update(
    {
      title,
      message,
      link,
      publish,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );

  return successResponse(res, ok, permission);
});
