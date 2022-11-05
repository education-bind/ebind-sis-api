import express from "express";
import {
  createEduFaculties,
  updateEduFaculties,
} from "../../../../controllers/eduFaculties.controller.js";
import {
  isEbindUserLoggedInAndVerified,
  verifyToken,
} from "../../../../middlewares/authentication";
import { findAllData, findData } from "../../../../middlewares/contentChecker";
import { temporaryDelete } from "../../../../services/deleteContent.service";
import { getData } from "../../../../services/getContent.service";
import { uploads } from "../../../../utils/multer.js";
import {
  validateEduFaculties,
  validateUpdateEduFaculties,
} from "../../../../utils/validations";

const router = express.Router();

router.get("/", findAllData("edu_faculties"), getData);
router.get("/:id", findData("edu_faculties"), getData);

router.use(verifyToken);

router.use(isEbindUserLoggedInAndVerified);
router.post(
  "/",
  uploads.single("logoImage"),
  validateEduFaculties,
  createEduFaculties
);
router.patch(
  "/:id",
  findData("edu_faculties"),
  uploads.single("logoImage"),
  validateUpdateEduFaculties,
  updateEduFaculties
);
router.delete("/:id", findData("edu_faculties"), temporaryDelete);

export default router;
