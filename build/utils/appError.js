"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function cov_lnpmfci2d() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\appError.js";
  var hash = "0ebe8f0ea22c0df23839b7523b6cd1b5fe185b60";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\appError.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 19
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 33
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 69
        }
      },
      "3": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 30
        }
      },
      "4": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 2,
            column: 3
          }
        },
        loc: {
          start: {
            line: 2,
            column: 35
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 2
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 18
          },
          end: {
            line: 5,
            column: 68
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 5,
            column: 52
          },
          end: {
            line: 5,
            column: 58
          }
        }, {
          start: {
            line: 5,
            column: 61
          },
          end: {
            line: 5,
            column: 68
          }
        }],
        line: 5
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0ebe8f0ea22c0df23839b7523b6cd1b5fe185b60"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_lnpmfci2d = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_lnpmfci2d();

class AppError extends Error {
  constructor(message, statusCode) {
    cov_lnpmfci2d().f[0]++;
    cov_lnpmfci2d().s[0]++;
    super(message);
    cov_lnpmfci2d().s[1]++;
    this.statusCode = statusCode;
    cov_lnpmfci2d().s[2]++;
    this.status = `${statusCode}`.startsWith("4") ? (cov_lnpmfci2d().b[0][0]++, "fail") : (cov_lnpmfci2d().b[0][1]++, "error");
    cov_lnpmfci2d().s[3]++;
    this.isOperational = true;
    cov_lnpmfci2d().s[4]++;
    Error.captureStackTrace(this, this.constructor);
  }

}

var _default = AppError;
exports.default = _default;
module.exports = exports.default;