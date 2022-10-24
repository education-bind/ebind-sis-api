import express from "express";
import AppError from "../utils/appError";
import messages from "../utils/customMessages";
import statusCode from "../utils/statusCodes";
import apiRouter from "./api/index";

const { endpointNotFound } = messages;
const { notFound } = statusCode;

const allRoutes = express.Router();

allRoutes.use("/api", apiRouter);

allRoutes.all("*", (req, res, next) => {
  next(new AppError(endpointNotFound, notFound));
});

export default allRoutes;
