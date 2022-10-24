import express from "express";
import {
  createCountry,
  updateCountry,
} from "../../../../controllers/countries.controller";
import {
  isEbindUserLoggedInAndVerified,
  verifyToken,
} from "../../../../middlewares/authentication";
import { findAllData, findData } from "../../../../middlewares/contentChecker";
import { temporaryDelete } from "../../../../services/deleteContent.service";
import { getData } from "../../../../services/getContent.service";
import {
  validateCountry,
  validateUpdateCountry,
} from "../../../../utils/validations";

const router = express.Router();

router.get("/", findAllData("countries"), getData);
router.get("/:id", findData("countries"), getData);

router.use(verifyToken);

router.use(isEbindUserLoggedInAndVerified);
router.post("/", validateCountry, createCountry);
router.patch(
  "/:id",
  findData("countries"),
  validateUpdateCountry,
  updateCountry
);
router.delete("/:id", findData("countries"), temporaryDelete);

export default router;
