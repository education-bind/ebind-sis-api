"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successResponse = exports.deleteResponse = void 0;

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_26494kkw0y() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\responseHandlers.js";
  var hash = "acce0c3a162975a8a02f0ff8b80ee8ae7dc79e96";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\responseHandlers.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 25
        }
      },
      "1": {
        start: {
          line: 5,
          column: 31
        },
        end: {
          line: 9,
          column: 4
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 9,
          column: 4
        }
      },
      "3": {
        start: {
          line: 11,
          column: 30
        },
        end: {
          line: 15,
          column: 4
        }
      },
      "4": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 15,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 31
          },
          end: {
            line: 5,
            column: 32
          }
        },
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 9,
            column: 4
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 30
          },
          end: {
            line: 11,
            column: 31
          }
        },
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 15,
            column: 4
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "acce0c3a162975a8a02f0ff8b80ee8ae7dc79e96"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_26494kkw0y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_26494kkw0y();
const {
  ok
} = (cov_26494kkw0y().s[0]++, _statusCodes.default);
cov_26494kkw0y().s[1]++;

const successResponse = (res, code, data) => {
  cov_26494kkw0y().f[0]++;
  cov_26494kkw0y().s[2]++;
  return res.status(code).json({
    status: "success",
    data
  });
};

exports.successResponse = successResponse;
cov_26494kkw0y().s[3]++;

const deleteResponse = (res, message) => {
  cov_26494kkw0y().f[1]++;
  cov_26494kkw0y().s[4]++;
  return res.status(ok).json({
    status: "success",
    message
  });
};

exports.deleteResponse = deleteResponse;