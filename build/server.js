"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("dotenv/config");

var _logger = _interopRequireDefault(require("./utils/logger"));

var _open = _interopRequireDefault(require("open"));

var _app = _interopRequireDefault(require("./app"));

function cov_1qsn0r337v() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\server.js";
  var hash = "98dd52d468846905a12208a23042640cd491ac71";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\server.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 58
        }
      },
      "2": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 37
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 18
        }
      },
      "4": {
        start: {
          line: 13,
          column: 13
        },
        end: {
          line: 13,
          column: 37
        }
      },
      "5": {
        start: {
          line: 14,
          column: 15
        },
        end: {
          line: 18,
          column: 2
        }
      },
      "6": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "7": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 67
        }
      },
      "8": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "9": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 59
        }
      },
      "10": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 37
        }
      },
      "11": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "12": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 20
        }
      },
      "13": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 37,
          column: 3
        }
      },
      "14": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 63
        }
      },
      "15": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "16": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 43
        }
      },
      "17": {
        start: {
          line: 39,
          column: 0
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "18": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 32
          },
          end: {
            line: 5,
            column: 33
          }
        },
        loc: {
          start: {
            line: 5,
            column: 41
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 32
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 38
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 33
          },
          end: {
            line: 24,
            column: 34
          }
        },
        loc: {
          start: {
            line: 24,
            column: 42
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 24
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 15
          },
          end: {
            line: 27,
            column: 16
          }
        },
        loc: {
          start: {
            line: 27,
            column: 21
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 27
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 32,
            column: 22
          },
          end: {
            line: 32,
            column: 23
          }
        },
        loc: {
          start: {
            line: 32,
            column: 28
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 32
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 34,
            column: 15
          },
          end: {
            line: 34,
            column: 16
          }
        },
        loc: {
          start: {
            line: 34,
            column: 21
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 34
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 39,
            column: 22
          },
          end: {
            line: 39,
            column: 23
          }
        },
        loc: {
          start: {
            line: 39,
            column: 35
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 39
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 13,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 13,
            column: 29
          }
        }, {
          start: {
            line: 13,
            column: 33
          },
          end: {
            line: 13,
            column: 37
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
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
        line: 15
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "98dd52d468846905a12208a23042640cd491ac71"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1qsn0r337v = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1qsn0r337v();
cov_1qsn0r337v().s[0]++;
process.on("uncaughtException", err => {
  cov_1qsn0r337v().f[0]++;
  cov_1qsn0r337v().s[1]++;

  _logger.default.error("UNCAUGHT EXCEPTION! 💥 Shutting down...");

  cov_1qsn0r337v().s[2]++;
  console.log(err.name, err.message);
  cov_1qsn0r337v().s[3]++;
  process.exit(1);
});
const port = (cov_1qsn0r337v().s[4]++, (cov_1qsn0r337v().b[0][0]++, process.env.PORT) || (cov_1qsn0r337v().b[0][1]++, 3000));
const server = (cov_1qsn0r337v().s[5]++, _app.default.listen(port, () => {
  cov_1qsn0r337v().f[1]++;
  cov_1qsn0r337v().s[6]++;

  if (process.send) {
    cov_1qsn0r337v().b[1][0]++;
    cov_1qsn0r337v().s[7]++;
    process.send(`Server running at http://localhost:${port}\n\n`);
  } else {
    cov_1qsn0r337v().b[1][1]++;
  }
}));
/* if (process.env.NODE_ENV === "development") {
  open(`http://localhost:${port}`);
} */

cov_1qsn0r337v().s[8]++;
process.on("unhandledRejection", err => {
  cov_1qsn0r337v().f[2]++;
  cov_1qsn0r337v().s[9]++;

  _logger.default.error("UNHANDLED REJECTION! 💥 Shutting down...");

  cov_1qsn0r337v().s[10]++;
  console.log(err.name, err.message);
  cov_1qsn0r337v().s[11]++;
  server.close(() => {
    cov_1qsn0r337v().f[3]++;
    cov_1qsn0r337v().s[12]++;
    process.exit(1);
  });
});
cov_1qsn0r337v().s[13]++;
process.on("SIGTERM", () => {
  cov_1qsn0r337v().f[4]++;
  cov_1qsn0r337v().s[14]++;

  _logger.default.warn("👋 SIGTERM RECEIVED. Shutting down gracefully");

  cov_1qsn0r337v().s[15]++;
  server.close(() => {
    cov_1qsn0r337v().f[5]++;
    cov_1qsn0r337v().s[16]++;

    _logger.default.error("💥 Process terminated!");
  });
});
cov_1qsn0r337v().s[17]++;
process.on("message", message => {
  cov_1qsn0r337v().f[6]++;
  cov_1qsn0r337v().s[18]++;
  console.log(message);
});