import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./controllers/errorController";
import AppError from "./utils/appError";
import helmet from "helmet";
import compression from "compression";

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

app.get('/', (_, res) => {
  res.end("Welcome to Education bind ")
})

app.all("*", (req, _, next) => {
  next(
    new AppError(`Opps! can't find "${req.originalUrl}" on this server!`, 404)
  );
});

app.use(globalErrorHandler);

export default app;
