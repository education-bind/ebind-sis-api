import express from "express";
import countries from "./countries";

const apiRouter = express.Router();

apiRouter.get("/", (_, res) => {
  res.json({ message: "API VERSION 1" });
});
apiRouter.use("/countries", countries);

export default apiRouter;
