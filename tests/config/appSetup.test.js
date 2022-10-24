import { createClient } from "redis";
import "dotenv/config";

beforeEach((done) => {
  const { REDIS_URL, REDIS_PWD } = process.env;

  const redisClient = createClient({
    url: REDIS_URL,
    password: REDIS_PWD,
  });

  redisClient.on("connect", () => {
    console.log("Redis client connected...");
  });

  redisClient.on("ready", () => {
    console.log("Redis client connected and ready to use...");
  });

  redisClient.on("error", (err) => {
    console.log("Redis client connected...");
  });

  redisClient.on("end", (err) => {
    console.log("Redis client disconnected...");
  });

  (async () => {
    await redisClient.connect();
  })();
  done();
});
