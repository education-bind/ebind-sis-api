"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function cov_10br4xlig3() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\statusCodes.js";
  var hash = "d22cbebbd0c501fc19ff3909ba6bb38c183271a4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\statusCodes.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 14
        },
        end: {
          line: 11,
          column: 3
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d22cbebbd0c501fc19ff3909ba6bb38c183271a4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10br4xlig3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_10br4xlig3();
const codes = (cov_10br4xlig3().s[0]++, {
  ok: 200,
  created: 201,
  badRequest: 400,
  unAuthorized: 401,
  notFound: 404,
  conflict: 409,
  forbidden: 403,
  serverError: 500,
  unsupportedMediaType: 415
});
var _default = codes;
exports.default = _default;
module.exports = exports.default;