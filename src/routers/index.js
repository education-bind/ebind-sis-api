import express from "express";
import apiRouter from "./api/index";

const allRoutes = express.Router();

allRoutes.use("/", apiRouter);

export default allRoutes;
