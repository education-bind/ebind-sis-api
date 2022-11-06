"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./api/index"));

function cov_6zznl61j8() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\index.js";
  var hash = "7db2890a180cd0c55a344fd56ab83e32374a5763";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\index.js",
    statementMap: {
      0: {
        start: {
          line: 6,
          column: 18,
        },
        end: {
          line: 6,
          column: 34,
        },
      },
      1: {
        start: {
          line: 8,
          column: 0,
        },
        end: {
          line: 8,
          column: 33,
        },
      },
    },
    fnMap: {},
    branchMap: {},
    s: {
      0: 0,
      1: 0,
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7db2890a180cd0c55a344fd56ab83e32374a5763",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6zznl61j8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_6zznl61j8();
const allRoutes = (cov_6zznl61j8().s[0]++, _express.default.Router());
cov_6zznl61j8().s[1]++;
allRoutes.use("/api", _index.default);
var _default = allRoutes;
exports.default = _default;
module.exports = exports.default;
