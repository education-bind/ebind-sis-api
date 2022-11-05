import express from "express";
import authentication from "./authentication";
import countries from "./countries";
import eduPermissions from "./eduPermissions";
import eduLanguages from "./eduLanguages";
import eduUserTypes from "./eduUserTypes";
import schools from "./schools";
import faculities from "./eduFaculties.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authentication);
apiRouter.use("/countries", countries);
apiRouter.use("/permissions", eduPermissions);
apiRouter.use("/languages", eduLanguages);
apiRouter.use("/usertypes", eduUserTypes);
apiRouter.use("/schools", schools);
apiRouter.use("/faculties", faculities);

export default apiRouter;
