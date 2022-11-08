import express from "express";
import { getAccessToken } from "../../../controllers/authentication.controller";
import { verifyRefleshToken } from "../../../middlewares/authentication";
import ebind from "./ebind";
import notifications from "./notifications";

const apiRouter = express.Router();

apiRouter.post("/refreshToken", verifyRefleshToken, getAccessToken);
apiRouter.use("/edu", ebind);
apiRouter.use("/notifications", notifications)

export default apiRouter;
