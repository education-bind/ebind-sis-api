import express from "express";
import {
  createEduUserType,
  updateEduUserType,
} from "../../../../controllers/eduUserTypes.controller";
import {
  isEbindUserLoggedInAndVerified,
  verifyToken,
} from "../../../../middlewares/authentication";
import { findAllData, findData } from "../../../../middlewares/contentChecker";
import { temporaryDelete } from "../../../../services/deleteContent.service";
import { getData } from "../../../../services/getContent.service";
import { validateEduUserTypes } from "../../../../utils/validations";

const router = express.Router();

router.get("/", findAllData("edu_user_types"), getData);
router.get("/:id", findData("edu_user_types"), getData);

router.use(verifyToken);

router.use(isEbindUserLoggedInAndVerified);
router.post("/", validateEduUserTypes, createEduUserType);
router.patch(
  "/:id",
  validateEduUserTypes,
  findData("edu_user_types"),
  updateEduUserType
);
router.delete("/:id", findData("edu_user_types"), temporaryDelete);

export default router;
