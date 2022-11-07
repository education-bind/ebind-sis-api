import cors from "cors";

const urls = {
  prod: "https://www.educationbind.com",
  dev: "http://localhost:3000",
  app: "http://localhost:5000",
};
const urlsAllowedToAccess =
  Object.entries(urls || {}).map(([key, value]) => value) || [];

export const configuration = {
  credentials: true,
  origin: function (origin, callback) {
    if (!origin || urlsAllowedToAccess.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`${origin} not permitted by CORS policy.`));
    }
  },
};

export default (req, res, next) => {
  return cors(configuration)(req, res, next);
};
