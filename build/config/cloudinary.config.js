"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

require("dotenv/config");

function cov_2mflu6ucaf() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\config\\cloudinary.config.js";
  var hash = "68599f470501bf35e130680de1cc1c9613752cf2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\config\\cloudinary.config.js",
    statementMap: {
      0: {
        start: {
          line: 3,
          column: 0,
        },
        end: {
          line: 7,
          column: 3,
        },
      },
    },
    fnMap: {},
    branchMap: {},
    s: {
      0: 0,
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "68599f470501bf35e130680de1cc1c9613752cf2",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mflu6ucaf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2mflu6ucaf();
cov_2mflu6ucaf().s[0]++;

_cloudinary.default.config({
  cloud_name: process.env.CLOUDINARY_USER_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

var _default = _cloudinary.default;
exports.default = _default;
module.exports = exports.default;
