import express from "express";
import {
  eduUserLogin,
  eduUserLogout,
} from "../../../../controllers/authentication.controller";
import {
  isEbindUserLoggedInAndVerified,
  verifyToken,
} from "../../../../middlewares/authentication";
import {
  bothEmailAndPasswordExist,
  loginDataExistOnByOne,
  verifyCredentials,
} from "../../../../middlewares/credentialChecker";

const router = express.Router();

router.post(
  "/login",
  bothEmailAndPasswordExist,
  loginDataExistOnByOne,
  verifyCredentials,
  eduUserLogin
);
router.get(
  "/logout",
  verifyToken,
  isEbindUserLoggedInAndVerified,
  eduUserLogout
);

export default router;
