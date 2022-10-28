"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _appError = _interopRequireDefault(require("../utils/appError"));

var _customMessages = _interopRequireDefault(require("../utils/customMessages"));

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

var _index = _interopRequireDefault(require("./api/index"));

function cov_6zznl61j8() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\index.js";
  var hash = "7cc1d33527d17284e9172ad99d7e383020f62645";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 29
        },
        end: {
          line: 7,
          column: 37
        }
      },
      "1": {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 8,
          column: 31
        }
      },
      "2": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 10,
          column: 34
        }
      },
      "3": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 33
        }
      },
      "4": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "5": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 49
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 19
          },
          end: {
            line: 14,
            column: 20
          }
        },
        loc: {
          start: {
            line: 14,
            column: 39
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7cc1d33527d17284e9172ad99d7e383020f62645"
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
const {
  endpointNotFound
} = (cov_6zznl61j8().s[0]++, _customMessages.default);
const {
  notFound
} = (cov_6zznl61j8().s[1]++, _statusCodes.default);
const allRoutes = (cov_6zznl61j8().s[2]++, _express.default.Router());
cov_6zznl61j8().s[3]++;
allRoutes.use("/api", _index.default);
cov_6zznl61j8().s[4]++;
allRoutes.all("*", (req, res, next) => {
  cov_6zznl61j8().f[0]++;
  cov_6zznl61j8().s[5]++;
  next(new _appError.default(endpointNotFound, notFound));
});
var _default = allRoutes;
exports.default = _default;
module.exports = exports.default;