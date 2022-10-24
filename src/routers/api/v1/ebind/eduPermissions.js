import express from "express";
import {
  createEduPermission,
  updateEduPermission,
} from "../../../../controllers/eduPermissions.controller";
import {
  isEbindUserLoggedInAndVerified,
  verifyToken,
} from "../../../../middlewares/authentication";
import { findAllData, findData } from "../../../../middlewares/contentChecker";
import { temporaryDelete } from "../../../../services/deleteContent.service";
import { getData } from "../../../../services/getContent.service";
import { validateEduPermission } from "../../../../utils/validations";

const router = express.Router();

router.get("/", findAllData("edu_permissions"), getData);
router.get("/:id", findData("edu_permissions"), getData);

router.use(verifyToken);

router.use(isEbindUserLoggedInAndVerified);
router.post("/", validateEduPermission, createEduPermission);
router.patch(
  "/:id",
  validateEduPermission,
  findData("edu_permissions"),
  updateEduPermission
);
router.delete("/:id", findData("edu_permissions"), temporaryDelete);

export default router;
