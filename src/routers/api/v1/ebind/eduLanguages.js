import express from "express";
import { createEduLanguage, updateEduLanguage } from "../../../../controllers/eduLanguages.controller";
import {
  isEbindUserLoggedInAndVerified,
  verifyToken,
} from "../../../../middlewares/authentication";
import { findAllData, findData } from "../../../../middlewares/contentChecker";
import { temporaryDelete } from "../../../../services/deleteContent.service";
import { getData } from "../../../../services/getContent.service";
import { validateEduLanguage, validateUpdateEduLanguage } from "../../../../utils/validations";

const router = express.Router();

router.get("/", findAllData("edu_languages"), getData);
router.get("/:id", findData("edu_languages"), getData);

router.use(verifyToken);

router.use(isEbindUserLoggedInAndVerified);
router.post("/", validateEduLanguage, createEduLanguage);
router.patch(
  "/:id",
  validateUpdateEduLanguage,
  findData("edu_languages"),
  updateEduLanguage
);
router.delete("/:id", findData("edu_languages"), temporaryDelete);

export default router;
