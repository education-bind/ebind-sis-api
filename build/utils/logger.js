"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function cov_ub9oji7li() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\logger.js";
  var hash = "7c040a04bd7287055c1a70525ad0b3c5fee2cca9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\logger.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 7,
          column: 5
        }
      },
      "1": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 6,
          column: 39
        }
      },
      "2": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 34
        }
      },
      "3": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 35
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 36
        }
      },
      "5": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        loc: {
          start: {
            line: 4,
            column: 32
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 19
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 18
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 24
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 6
          },
          end: {
            line: 4,
            column: 18
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 4,
            column: 16
          },
          end: {
            line: 4,
            column: 18
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 4,
            column: 20
          },
          end: {
            line: 4,
            column: 30
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 4,
            column: 28
          },
          end: {
            line: 4,
            column: 30
          }
        }],
        line: 4
      },
      "2": {
        loc: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
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
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7c040a04bd7287055c1a70525ad0b3c5fee2cca9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ub9oji7li = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ub9oji7li();

class Logger {
  log(message = (cov_ub9oji7li().b[0][0]++, ""), error = (cov_ub9oji7li().b[1][0]++, "")) {
    cov_ub9oji7li().f[0]++;
    cov_ub9oji7li().s[0]++;

    if (message) {
      cov_ub9oji7li().b[2][0]++;
      cov_ub9oji7li().s[1]++;
      console.log(`${message}`, error);
    } else {
      cov_ub9oji7li().b[2][1]++;
    }
  }

  info(message) {
    cov_ub9oji7li().f[1]++;
    cov_ub9oji7li().s[2]++;
    this.log(_chalk.default.blue(message));
  }

  success(message) {
    cov_ub9oji7li().f[2]++;
    cov_ub9oji7li().s[3]++;
    this.log(_chalk.default.green(message));
  }

  warn(message) {
    cov_ub9oji7li().f[3]++;
    cov_ub9oji7li().s[4]++;
    this.log(_chalk.default.yellow(message));
  }

  error(message, error) {
    cov_ub9oji7li().f[4]++;
    cov_ub9oji7li().s[5]++;
    this.log(_chalk.default.red(message), error);
  }

}

var _default = new Logger();

exports.default = _default;
module.exports = exports.default;