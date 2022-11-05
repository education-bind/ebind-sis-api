import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import globalErrorHandler from "./controllers/error.controller";
import compression from "compression";
import allRoutes from "./routers";
import bodyParser from "body-parser";
const { urlencoded, json } = bodyParser;

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
app.use(urlencoded());
app.use(json());
app.use(helmet());
app.use(compression());
app.use(express.static(`public`));

app.use(allRoutes);

app.use(globalErrorHandler);

export default app;
