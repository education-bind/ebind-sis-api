import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import globalErrorHandler from "./controllers/error.controller";
import compression from "compression";
import allRoutes from "./routers";

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
  console.log("NODE_ENV=====>", process.env.NODE_ENV)
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(compression());
app.use(express.static(`${__dirname}/public`));

app.use(allRoutes);

app.use(globalErrorHandler);

export default app;
