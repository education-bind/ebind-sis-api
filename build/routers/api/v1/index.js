"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = require("../../../controllers/authentication.controller");

var _authentication2 = require("../../../middlewares/authentication");

var _ebind = _interopRequireDefault(require("./ebind"));

function cov_2pa0efy090() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\index.js";
  var hash = "3530f52b4080af3204a1d87c998283b63bd4d1ea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 18
        },
        end: {
          line: 6,
          column: 34
        }
      },
      "1": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 68
        }
      },
      "2": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 29
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3530f52b4080af3204a1d87c998283b63bd4d1ea"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pa0efy090 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2pa0efy090();
const apiRouter = (cov_2pa0efy090().s[0]++, _express.default.Router());
cov_2pa0efy090().s[1]++;
apiRouter.post("/refreshToken", _authentication2.verifyRefleshToken, _authentication.getAccessToken);
cov_2pa0efy090().s[2]++;
apiRouter.use("/edu", _ebind.default);
var _default = apiRouter;
exports.default = _default;
module.exports = exports.default;