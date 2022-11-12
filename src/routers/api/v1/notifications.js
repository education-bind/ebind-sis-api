import express from "express";
import {
  readNotification,
  readNotifications,
} from "../../../controllers/notification.controller";
import {
  createNotificationTypes,
  updateNotificationTypes,
} from "../../../controllers/notificationTypes.controller";
import {
  isEbindUserLoggedInAndVerified,
  verifyToken,
} from "../../../middlewares/authentication";
import { findAllData, findData } from "../../../middlewares/contentChecker";
import { temporaryDelete } from "../../../services/deleteContent.service";
import { getData } from "../../../services/getContent.service";
import { validateNotificationTypes } from "../../../utils/validations";

const router = express.Router();

router.get("/types/", findAllData("notification_types"), getData);
router.get("/types/:id", findData("notification_types"), getData);

router.use(verifyToken);

router.use(isEbindUserLoggedInAndVerified);
router.get("/", findAllData("notifications"), getData);
router.get("/:id", findData("notifications"), getData);
router.patch("/read/", findAllData("notifications"), readNotifications);
router.patch("/read/:id", findData("notifications"), readNotification);
router.post("/types/", validateNotificationTypes, createNotificationTypes);
router.patch(
  "/types/:id",
  validateNotificationTypes,
  findData("notification_types"),
  updateNotificationTypes
);
router.delete("/types/:id", findData("notification_types"), temporaryDelete);

export default router;
