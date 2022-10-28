"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSequelizeUniqueConstraintError = exports.handleJWTExpiredError = exports.handleJWTError = void 0;

var _appError = _interopRequireDefault(require("./appError"));

var _customMessages = _interopRequireDefault(require("./customMessages"));

var _statusCodes = _interopRequireDefault(require("./statusCodes"));

function cov_que1yuh86() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\errorHandlers.js";
  var hash = "2964b39c30bfdabe683a1511b9bdbdcd742b269d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\errorHandlers.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 37
        },
        end: {
          line: 5,
          column: 47
        }
      },
      "1": {
        start: {
          line: 6,
          column: 38
        },
        end: {
          line: 6,
          column: 46
        }
      },
      "2": {
        start: {
          line: 8,
          column: 52
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "3": {
        start: {
          line: 9,
          column: 17
        },
        end: {
          line: 9,
          column: 19
        }
      },
      "4": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 33
        }
      },
      "6": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 75
        }
      },
      "7": {
        start: {
          line: 16,
          column: 30
        },
        end: {
          line: 16,
          column: 72
        }
      },
      "8": {
        start: {
          line: 16,
          column: 36
        },
        end: {
          line: 16,
          column: 72
        }
      },
      "9": {
        start: {
          line: 18,
          column: 37
        },
        end: {
          line: 19,
          column: 45
        }
      },
      "10": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 52
          },
          end: {
            line: 8,
            column: 53
          }
        },
        loc: {
          start: {
            line: 8,
            column: 61
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 17
          },
          end: {
            line: 10,
            column: 18
          }
        },
        loc: {
          start: {
            line: 10,
            column: 25
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
            line: 16,
            column: 30
          },
          end: {
            line: 16,
            column: 31
          }
        },
        loc: {
          start: {
            line: 16,
            column: 36
          },
          end: {
            line: 16,
            column: 72
          }
        },
        line: 16
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 18,
            column: 37
          },
          end: {
            line: 18,
            column: 38
          }
        },
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 45
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 13,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 36
          },
          end: {
            line: 13,
            column: 47
          }
        }, {
          start: {
            line: 13,
            column: 50
          },
          end: {
            line: 13,
            column: 61
          }
        }],
        line: 13
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
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2964b39c30bfdabe683a1511b9bdbdcd742b269d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_que1yuh86 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_que1yuh86();
const {
  badRequest,
  unAuthorized
} = (cov_que1yuh86().s[0]++, _statusCodes.default);
const {
  JWTError,
  JWTExpiredError
} = (cov_que1yuh86().s[1]++, _customMessages.default);
cov_que1yuh86().s[2]++;

const handleSequelizeUniqueConstraintError = err => {
  cov_que1yuh86().f[0]++;
  const errObj = (cov_que1yuh86().s[3]++, {});
  cov_que1yuh86().s[4]++;
  err.errors.map(er => {
    cov_que1yuh86().f[1]++;
    cov_que1yuh86().s[5]++;
    errObj[er.path] = er.message;
  });
  cov_que1yuh86().s[6]++;
  return new _appError.default(errObj.code ? (cov_que1yuh86().b[0][0]++, errObj.code) : (cov_que1yuh86().b[0][1]++, errObj.name), badRequest);
};

exports.handleSequelizeUniqueConstraintError = handleSequelizeUniqueConstraintError;
cov_que1yuh86().s[7]++;

const handleJWTError = () => {
  cov_que1yuh86().f[2]++;
  cov_que1yuh86().s[8]++;
  return new _appError.default(JWTError, unAuthorized);
};

exports.handleJWTError = handleJWTError;
cov_que1yuh86().s[9]++;

const handleJWTExpiredError = () => {
  cov_que1yuh86().f[3]++;
  cov_que1yuh86().s[10]++;
  return new _appError.default(JWTExpiredError, unAuthorized);
};

exports.handleJWTExpiredError = handleJWTExpiredError;