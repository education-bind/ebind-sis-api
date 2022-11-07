import "dotenv/config";
import logger from "./utils/logger";
import open from "open";

process.on("uncaughtException", (err) => {
  logger.error("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

import app from "./app";

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  logger.warn(`\nServer running at http://localhost:${port}\n`);
});

/* if (process.env.NODE_ENV === "development") {
  open(`http://localhost:${port}`);
} */

process.on("unhandledRejection", (err) => {
  logger.error("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  logger.warn("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    logger.error("💥 Process terminated!");
  });
});

process.on("message", (message) => {
  console.log(message);
});
