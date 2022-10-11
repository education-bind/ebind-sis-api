import express from "express";
import {
  createCountry,
  deleteCountry,
  getCountries,
  getCountry,
  updateCountry,
} from "../../../controllers/countriesController";
import {
  validateCountry,
  validateUpdateCountry,
} from "../../../utils/validations";

const router = express.Router();

router.get("/", getCountries);
router.get("/:id", getCountry);
router.post("/", validateCountry, createCountry);
router.patch("/:id", validateUpdateCountry, updateCountry);
router.delete("/:id", deleteCountry);

export default router;
