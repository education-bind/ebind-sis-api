"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = _interopRequireDefault(require("./authentication"));

var _countries = _interopRequireDefault(require("./countries"));

var _eduPermissions = _interopRequireDefault(require("./eduPermissions"));

var _eduLanguages = _interopRequireDefault(require("./eduLanguages"));

var _eduUserTypes = _interopRequireDefault(require("./eduUserTypes"));

function cov_2281doi2d0() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\index.js";
  var hash = "c4fd7b019298bc8667307e0d392d5c3f8a1f3480";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 34
        }
      },
      "1": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 39
        }
      },
      "2": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 39
        }
      },
      "3": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 46
        }
      },
      "4": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 42
        }
      },
      "5": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 42
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c4fd7b019298bc8667307e0d392d5c3f8a1f3480"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2281doi2d0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2281doi2d0();
const apiRouter = (cov_2281doi2d0().s[0]++, _express.default.Router());
cov_2281doi2d0().s[1]++;
apiRouter.use("/auth", _authentication.default);
cov_2281doi2d0().s[2]++;
apiRouter.use("/countries", _countries.default);
cov_2281doi2d0().s[3]++;
apiRouter.use("/permissions", _eduPermissions.default);
cov_2281doi2d0().s[4]++;
apiRouter.use("/languages", _eduLanguages.default);
cov_2281doi2d0().s[5]++;
apiRouter.use("/usertypes", _eduUserTypes.default);
var _default = apiRouter;
exports.default = _default;
module.exports = exports.default;