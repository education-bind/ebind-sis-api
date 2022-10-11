import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import globalErrorHandler from "./controllers/errorController";
import AppError from "./utils/appError";
import messages from "./utils/customMessages";
import statusCode from "./utils/statusCodes";
import compression from "compression";
import allRoutes from "./routers";

const { endpointNotFound } = messages;
const { notFound } = statusCode;

const app = express();

app.use(cors());
app.enable("trust proxy");

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(compression());
app.use(express.static(`${__dirname}/public`));

app.use(allRoutes);

app.all("*", (_req, _, next) => {
  next(new AppError(endpointNotFound, notFound));
});

app.use(globalErrorHandler);

export default app;
