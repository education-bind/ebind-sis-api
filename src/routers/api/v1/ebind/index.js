import express from "express";
import authentication from "./authentication";
import countries from "./countries";
import eduPermissions from "./eduPermissions";
import eduLanguages from "./eduLanguages";
import eduUserTypes from "./eduUserTypes";

const apiRouter = express.Router();

apiRouter.use("/auth", authentication);
apiRouter.use("/countries", countries);
apiRouter.use("/permissions", eduPermissions);
apiRouter.use("/languages", eduLanguages);
apiRouter.use("/usertypes", eduUserTypes);

export default apiRouter;
