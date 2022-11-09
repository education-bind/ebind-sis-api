import express from "express";
import apiRouter from "./api/index";

const allRoutes = express.Router();

allRoutes.use("/sis", apiRouter);

export default allRoutes;
