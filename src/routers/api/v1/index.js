import express from "express";
import { getAccessToken } from "../../../controllers/authentication.controller";
import { verifyRefleshToken } from "../../../middlewares/authentication";
import ebind from "./ebind";

const apiRouter = express.Router();

apiRouter.post("/refreshToken", verifyRefleshToken, getAccessToken);
apiRouter.use("/edu", ebind);

export default apiRouter;
