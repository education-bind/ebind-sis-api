"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendErrorProd = exports.sendErrorDev = exports.default = void 0;

var _errorHandlers = require("../utils/errorHandlers");

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

var _customMessages = _interopRequireDefault(require("../utils/customMessages"));

var _logger = _interopRequireDefault(require("../utils/logger"));

function cov_1job4sl8sk() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\error.controller.js";
  var hash = "a8072adbb02cbe9c53a0a05666a94e89a7454790";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\error.controller.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 10,
          column: 34
        }
      },
      "1": {
        start: {
          line: 12,
          column: 31
        },
        end: {
          line: 12,
          column: 39
        }
      },
      "2": {
        start: {
          line: 14,
          column: 28
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "3": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "4": {
        start: {
          line: 23,
          column: 29
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "5": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "6": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 28,
          column: 7
        }
      },
      "7": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 35
        }
      },
      "8": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "9": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 49
        }
      },
      "10": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 37
        }
      },
      "11": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "12": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 32
        }
      },
      "13": {
        start: {
          line: 45,
          column: 9
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "14": {
        start: {
          line: 49,
          column: 16
        },
        end: {
          line: 49,
          column: 26
        }
      },
      "15": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 32
        }
      },
      "16": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 53,
          column: 56
        }
      },
      "17": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 53,
          column: 56
        }
      },
      "18": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 67
        }
      },
      "19": {
        start: {
          line: 54,
          column: 42
        },
        end: {
          line: 54,
          column: 67
        }
      },
      "20": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 74
        }
      },
      "21": {
        start: {
          line: 55,
          column: 42
        },
        end: {
          line: 55,
          column: 74
        }
      },
      "22": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 28
          },
          end: {
            line: 14,
            column: 29
          }
        },
        loc: {
          start: {
            line: 14,
            column: 47
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 29
          },
          end: {
            line: 23,
            column: 30
          }
        },
        loc: {
          start: {
            line: 23,
            column: 48
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 23
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 15
          },
          end: {
            line: 39,
            column: 16
          }
        },
        loc: {
          start: {
            line: 39,
            column: 40
          },
          end: {
            line: 59,
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
            line: 24,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 29,
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
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 19
          },
          end: {
            line: 40,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 40,
            column: 19
          },
          end: {
            line: 40,
            column: 33
          }
        }, {
          start: {
            line: 40,
            column: 37
          },
          end: {
            line: 40,
            column: 48
          }
        }],
        line: 40
      },
      "2": {
        loc: {
          start: {
            line: 41,
            column: 15
          },
          end: {
            line: 41,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 41,
            column: 15
          },
          end: {
            line: 41,
            column: 25
          }
        }, {
          start: {
            line: 41,
            column: 29
          },
          end: {
            line: 41,
            column: 36
          }
        }],
        line: 41
      },
      "3": {
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        }, {
          start: {
            line: 45,
            column: 9
          },
          end: {
            line: 58,
            column: 3
          }
        }],
        line: 43
      },
      "4": {
        loc: {
          start: {
            line: 45,
            column: 9
          },
          end: {
            line: 58,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 9
          },
          end: {
            line: 58,
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
        line: 45
      },
      "5": {
        loc: {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 47,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 41
          }
        }, {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 35
          }
        }],
        line: 46
      },
      "6": {
        loc: {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 53,
            column: 56
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 53,
            column: 56
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
        line: 52
      },
      "7": {
        loc: {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 67
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 67
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
        line: 54
      },
      "8": {
        loc: {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 74
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 74
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
        line: 55
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
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a8072adbb02cbe9c53a0a05666a94e89a7454790"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1job4sl8sk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1job4sl8sk();
const {
  serverError
} = (cov_1job4sl8sk().s[0]++, _statusCodes.default);
const {
  serverErrorMessage
} = (cov_1job4sl8sk().s[1]++, _customMessages.default);
cov_1job4sl8sk().s[2]++;

const sendErrorDev = (err, req, res) => {
  cov_1job4sl8sk().f[0]++;
  cov_1job4sl8sk().s[3]++;
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack
  });
};

exports.sendErrorDev = sendErrorDev;
cov_1job4sl8sk().s[4]++;

const sendErrorProd = (err, req, res) => {
  cov_1job4sl8sk().f[1]++;
  cov_1job4sl8sk().s[5]++;

  if (err.isOperational) {
    cov_1job4sl8sk().b[0][0]++;
    cov_1job4sl8sk().s[6]++;
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    cov_1job4sl8sk().b[0][1]++;
  }

  cov_1job4sl8sk().s[7]++;

  _logger.default.error(`ERROR 💥 \n`, err);

  cov_1job4sl8sk().s[8]++;
  return res.status(serverError).json({
    status: "error",
    message: serverErrorMessage
  });
};

exports.sendErrorProd = sendErrorProd;

var _default = (err, req, res, next) => {
  cov_1job4sl8sk().f[2]++;
  cov_1job4sl8sk().s[9]++;
  err.statusCode = (cov_1job4sl8sk().b[1][0]++, err.statusCode) || (cov_1job4sl8sk().b[1][1]++, serverError);
  cov_1job4sl8sk().s[10]++;
  err.status = (cov_1job4sl8sk().b[2][0]++, err.status) || (cov_1job4sl8sk().b[2][1]++, "error");
  cov_1job4sl8sk().s[11]++;

  if (process.env.NODE_ENV === "development") {
    cov_1job4sl8sk().b[3][0]++;
    cov_1job4sl8sk().s[12]++;
    sendErrorDev(err, req, res);
  } else {
    cov_1job4sl8sk().b[3][1]++;
    cov_1job4sl8sk().s[13]++;

    if ((cov_1job4sl8sk().b[5][0]++, process.env.NODE_ENV === "production") || (cov_1job4sl8sk().b[5][1]++, process.env.NODE_ENV === "test")) {
      cov_1job4sl8sk().b[4][0]++;
      let error = (cov_1job4sl8sk().s[14]++, { ...err
      });
      cov_1job4sl8sk().s[15]++;
      error.message = err.message;
      cov_1job4sl8sk().s[16]++;

      if (err.name === "SequelizeUniqueConstraintError") {
        cov_1job4sl8sk().b[6][0]++;
        cov_1job4sl8sk().s[17]++;
        error = (0, _errorHandlers.handleSequelizeUniqueConstraintError)(err);
      } else {
        cov_1job4sl8sk().b[6][1]++;
      }

      cov_1job4sl8sk().s[18]++;

      if (err.name === "JsonWebTokenError") {
        cov_1job4sl8sk().b[7][0]++;
        cov_1job4sl8sk().s[19]++;
        error = (0, _errorHandlers.handleJWTError)();
      } else {
        cov_1job4sl8sk().b[7][1]++;
      }

      cov_1job4sl8sk().s[20]++;

      if (err.name === "TokenExpiredError") {
        cov_1job4sl8sk().b[8][0]++;
        cov_1job4sl8sk().s[21]++;
        error = (0, _errorHandlers.handleJWTExpiredError)();
      } else {
        cov_1job4sl8sk().b[8][1]++;
      }

      cov_1job4sl8sk().s[22]++;
      sendErrorProd(error, req, res);
    } else {
      cov_1job4sl8sk().b[4][1]++;
    }
  }
};

exports.default = _default;