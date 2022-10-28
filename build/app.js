"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _error = _interopRequireDefault(require("./controllers/error.controller"));

var _compression = _interopRequireDefault(require("compression"));

var _routers = _interopRequireDefault(require("./routers"));

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.enable("trust proxy");
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

if (process.env.NODE_ENV === "development") {
  app.use((0, _morgan.default)("dev"));
}

app.use((0, _cookieParser.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded());
app.use((0, _helmet.default)());
app.use((0, _compression.default)());
app.use(_express.default.static(`${__dirname}/public`));
app.use(_routers.default);
app.use(_error.default);
var _default = app;
exports.default = _default;
module.exports = exports.default;