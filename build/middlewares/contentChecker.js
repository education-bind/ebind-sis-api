"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findData = exports.findAllData = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _appError = _interopRequireDefault(require("../utils/appError"));

var _customMessages = _interopRequireDefault(require("../utils/customMessages"));

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_1ena4chjmq() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\contentChecker.js";
  var hash = "05191e4e17f96a73e3011b0f86285bac8238ce6d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\contentChecker.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 70
        },
        end: {
          line: 6,
          column: 72
        }
      },
      "1": {
        start: {
          line: 7,
          column: 34
        },
        end: {
          line: 7,
          column: 44
        }
      },
      "2": {
        start: {
          line: 8,
          column: 37
        },
        end: {
          line: 8,
          column: 45
        }
      },
      "3": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "4": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "5": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "6": {
        start: {
          line: 13,
          column: 22
        },
        end: {
          line: 15,
          column: 8
        }
      },
      "7": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 19,
          column: 7
        }
      },
      "8": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 55
        }
      },
      "9": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 30
        }
      },
      "10": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 40
        }
      },
      "11": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 20
        }
      },
      "12": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 39
        }
      },
      "13": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 43,
          column: 4
        }
      },
      "14": {
        start: {
          line: 29,
          column: 19
        },
        end: {
          line: 29,
          column: 29
        }
      },
      "15": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 42,
          column: 5
        }
      },
      "16": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 56
        }
      },
      "17": {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 35,
          column: 62
        }
      },
      "18": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 60
        }
      },
      "19": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 39,
          column: 61
        }
      },
      "20": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 41,
          column: 62
        }
      },
      "21": {
        start: {
          line: 46,
          column: 27
        },
        end: {
          line: 77,
          column: 1
        }
      },
      "22": {
        start: {
          line: 47,
          column: 25
        },
        end: {
          line: 61,
          column: 3
        }
      },
      "23": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 60,
          column: 5
        }
      },
      "24": {
        start: {
          line: 49,
          column: 22
        },
        end: {
          line: 51,
          column: 8
        }
      },
      "25": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 54,
          column: 7
        }
      },
      "26": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 55
        }
      },
      "27": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 30
        }
      },
      "28": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 56,
          column: 40
        }
      },
      "29": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 57,
          column: 20
        }
      },
      "30": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 39
        }
      },
      "31": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 76,
          column: 4
        }
      },
      "32": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 75,
          column: 5
        }
      },
      "33": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 66,
          column: 52
        }
      },
      "34": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 58
        }
      },
      "35": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 56
        }
      },
      "36": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 57
        }
      },
      "37": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 25
          }
        },
        loc: {
          start: {
            line: 10,
            column: 38
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 25
          },
          end: {
            line: 11,
            column: 26
          }
        },
        loc: {
          start: {
            line: 11,
            column: 65
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 28,
            column: 9
          },
          end: {
            line: 28,
            column: 10
          }
        },
        loc: {
          start: {
            line: 28,
            column: 29
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 28
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 46,
            column: 27
          },
          end: {
            line: 46,
            column: 28
          }
        },
        loc: {
          start: {
            line: 46,
            column: 41
          },
          end: {
            line: 77,
            column: 1
          }
        },
        line: 46
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 47,
            column: 25
          },
          end: {
            line: 47,
            column: 26
          }
        },
        loc: {
          start: {
            line: 47,
            column: 61
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 47
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 63,
            column: 9
          },
          end: {
            line: 63,
            column: 10
          }
        },
        loc: {
          start: {
            line: 63,
            column: 29
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 63
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 6
          },
          end: {
            line: 19,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 6
          },
          end: {
            line: 19,
            column: 7
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
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 42,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 33,
            column: 56
          }
        }, {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 35,
            column: 62
          }
        }, {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 37,
            column: 60
          }
        }, {
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 39,
            column: 61
          }
        }, {
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 41,
            column: 62
          }
        }],
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 54,
            column: 7
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
      "3": {
        loc: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 66,
            column: 52
          }
        }, {
          start: {
            line: 67,
            column: 6
          },
          end: {
            line: 68,
            column: 58
          }
        }, {
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 70,
            column: 56
          }
        }, {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 72,
            column: 57
          }
        }, {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 74,
            column: 62
          }
        }],
        line: 64
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
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0, 0],
      "2": [0, 0],
      "3": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "05191e4e17f96a73e3011b0f86285bac8238ce6d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ena4chjmq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ena4chjmq();
const {
  countries,
  edu_permissions,
  edu_user_types,
  edu_languages
} = (cov_1ena4chjmq().s[0]++, _models.default);
const {
  notFound,
  serverError
} = (cov_1ena4chjmq().s[1]++, _statusCodes.default);
const {
  noContent,
  wrongDatabase
} = (cov_1ena4chjmq().s[2]++, _customMessages.default);
cov_1ena4chjmq().s[3]++;

const findData = database => {
  cov_1ena4chjmq().f[0]++;
  cov_1ena4chjmq().s[4]++;

  const findInDatabase = async (databaseTable, id, req, next) => {
    cov_1ena4chjmq().f[1]++;
    cov_1ena4chjmq().s[5]++;

    try {
      const content = (cov_1ena4chjmq().s[6]++, await databaseTable.findOne({
        where: {
          id,
          active: true
        }
      }));
      cov_1ena4chjmq().s[7]++;

      if (!content) {
        cov_1ena4chjmq().b[0][0]++;
        cov_1ena4chjmq().s[8]++;
        return next(new _appError.default(noContent, notFound));
      } else {
        cov_1ena4chjmq().b[0][1]++;
      }

      cov_1ena4chjmq().s[9]++;
      req.foundData = content;
      cov_1ena4chjmq().s[10]++;
      req.databaseTable = databaseTable;
      cov_1ena4chjmq().s[11]++;
      return next();
    } catch (error) {
      cov_1ena4chjmq().s[12]++;
      return next(new _appError.default(error));
    }
  };

  cov_1ena4chjmq().s[13]++;
  return (req, res, next) => {
    cov_1ena4chjmq().f[2]++;
    const {
      id
    } = (cov_1ena4chjmq().s[14]++, req.params);
    cov_1ena4chjmq().s[15]++;

    switch (database) {
      case "countries":
        cov_1ena4chjmq().b[1][0]++;
        cov_1ena4chjmq().s[16]++;
        return findInDatabase(countries, id, req, next);

      case "edu_permissions":
        cov_1ena4chjmq().b[1][1]++;
        cov_1ena4chjmq().s[17]++;
        return findInDatabase(edu_permissions, id, req, next);

      case "edu_languages":
        cov_1ena4chjmq().b[1][2]++;
        cov_1ena4chjmq().s[18]++;
        return findInDatabase(edu_languages, id, req, next);

      case "edu_user_types":
        cov_1ena4chjmq().b[1][3]++;
        cov_1ena4chjmq().s[19]++;
        return findInDatabase(edu_user_types, id, req, next);

      default:
        cov_1ena4chjmq().b[1][4]++;
        cov_1ena4chjmq().s[20]++;
        return next(new _appError.default(wrongDatabase, serverError));
    }
  };
};

exports.findData = findData;
cov_1ena4chjmq().s[21]++;

const findAllData = database => {
  cov_1ena4chjmq().f[3]++;
  cov_1ena4chjmq().s[22]++;

  const findInDatabase = async (databaseTable, req, next) => {
    cov_1ena4chjmq().f[4]++;
    cov_1ena4chjmq().s[23]++;

    try {
      const content = (cov_1ena4chjmq().s[24]++, await databaseTable.findAll({
        where: {
          active: true
        }
      }));
      cov_1ena4chjmq().s[25]++;

      if (!content) {
        cov_1ena4chjmq().b[2][0]++;
        cov_1ena4chjmq().s[26]++;
        return next(new _appError.default(noContent, notFound));
      } else {
        cov_1ena4chjmq().b[2][1]++;
      }

      cov_1ena4chjmq().s[27]++;
      req.foundData = content;
      cov_1ena4chjmq().s[28]++;
      req.databaseTable = databaseTable;
      cov_1ena4chjmq().s[29]++;
      return next();
    } catch (error) {
      cov_1ena4chjmq().s[30]++;
      return next(new _appError.default(error));
    }
  };

  cov_1ena4chjmq().s[31]++;
  return (req, res, next) => {
    cov_1ena4chjmq().f[5]++;
    cov_1ena4chjmq().s[32]++;

    switch (database) {
      case "countries":
        cov_1ena4chjmq().b[3][0]++;
        cov_1ena4chjmq().s[33]++;
        return findInDatabase(countries, req, next);

      case "edu_permissions":
        cov_1ena4chjmq().b[3][1]++;
        cov_1ena4chjmq().s[34]++;
        return findInDatabase(edu_permissions, req, next);

      case "edu_languages":
        cov_1ena4chjmq().b[3][2]++;
        cov_1ena4chjmq().s[35]++;
        return findInDatabase(edu_languages, req, next);

      case "edu_user_types":
        cov_1ena4chjmq().b[3][3]++;
        cov_1ena4chjmq().s[36]++;
        return findInDatabase(edu_user_types, req, next);

      default:
        cov_1ena4chjmq().b[3][4]++;
        cov_1ena4chjmq().s[37]++;
        return next(new _appError.default(wrongDatabase, serverError));
    }
  };
};

exports.findAllData = findAllData;