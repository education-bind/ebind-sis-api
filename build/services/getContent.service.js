"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = void 0;

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _responseHandlers = require("../utils/responseHandlers");

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_1zbujgcj12() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\services\\getContent.service.js";
  var hash = "02e7540f5fd9763d1523befc18294fd721122b11";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\services\\getContent.service.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 25
        }
      },
      "1": {
        start: {
          line: 7,
          column: 23
        },
        end: {
          line: 10,
          column: 2
        }
      },
      "2": {
        start: {
          line: 8,
          column: 24
        },
        end: {
          line: 8,
          column: 27
        }
      },
      "3": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 34
          },
          end: {
            line: 7,
            column: 35
          }
        },
        loc: {
          start: {
            line: 7,
            column: 60
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "02e7540f5fd9763d1523befc18294fd721122b11"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1zbujgcj12 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1zbujgcj12();
const {
  ok
} = (cov_1zbujgcj12().s[0]++, _statusCodes.default);
const getData = (cov_1zbujgcj12().s[1]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_1zbujgcj12().f[0]++;
  const {
    foundData
  } = (cov_1zbujgcj12().s[2]++, req);
  cov_1zbujgcj12().s[3]++;
  return (0, _responseHandlers.successResponse)(res, ok, foundData);
}));
exports.getData = getData;