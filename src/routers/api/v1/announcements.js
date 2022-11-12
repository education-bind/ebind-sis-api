import express from "express";
import {
  createEduAnnouncement,
  updateEduAnnouncement,
} from "../../../controllers/eduAnnouncements.controller";
import {
  isEbindUserLoggedInAndVerified,
  verifyToken,
} from "../../../middlewares/authentication";
import { findAllData, findData } from "../../../middlewares/contentChecker";
import { temporaryDelete } from "../../../services/deleteContent.service";
import { getData } from "../../../services/getContent.service";
import {
  validateEduAnnouncements,
  validateUpdateEduAnnouncements,
} from "../../../utils/validations";

const router = express.Router();

router.get("/", findAllData("edu_announcements"), getData);
router.get("/:id", findData("edu_announcements"), getData);

router.use(verifyToken);

router.use(isEbindUserLoggedInAndVerified);
router.post("/", validateEduAnnouncements, createEduAnnouncement);
router.patch(
  "/:id",
  findData("edu_announcements"),
  validateUpdateEduAnnouncements,
  updateEduAnnouncement
);
router.delete("/:id", findData("edu_announcements"), temporaryDelete);

export default router;
