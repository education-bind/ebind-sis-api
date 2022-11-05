import express from "express";
import {
  createSchool,
  updateSchool,
} from "../../../../controllers/schools.controller";
import {
  isEbindUserLoggedInAndVerified,
  verifyToken,
} from "../../../../middlewares/authentication";
import { findAllData, findData } from "../../../../middlewares/contentChecker";
import { temporaryDelete } from "../../../../services/deleteContent.service";
import { getData } from "../../../../services/getContent.service";
import { uploads } from "../../../../utils/multer";
import {
  validateSchool,
  validateUpdateSchool,
} from "../../../../utils/validations";

const router = express.Router();

router.get("/", findAllData("schools"), getData);
router.get("/:id", findData("schools"), getData);

router.use(verifyToken);

router.use(isEbindUserLoggedInAndVerified);
router.post("/", uploads.single("logoImage"), validateSchool, createSchool);
router.patch(
  "/:id",
  findData("schools"),
  uploads.single("logoImage"),
  validateUpdateSchool,
  updateSchool
);
router.delete("/:id", findData("schools"), temporaryDelete);

export default router;
