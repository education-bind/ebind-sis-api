"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.findData = exports.findAllData = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _appError = _interopRequireDefault(require("../utils/appError"));

var _customMessages = _interopRequireDefault(
  require("../utils/customMessages")
);

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_1ena4chjmq() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\contentChecker.js";
  var hash = "cdb2609903a02af92b7d50d38a699310382b0a46";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\contentChecker.js",
    statementMap: {
      0: {
        start: {
          line: 13,
          column: 4,
        },
        end: {
          line: 13,
          column: 6,
        },
      },
      1: {
        start: {
          line: 14,
          column: 34,
        },
        end: {
          line: 14,
          column: 44,
        },
      },
      2: {
        start: {
          line: 15,
          column: 37,
        },
        end: {
          line: 15,
          column: 45,
        },
      },
      3: {
        start: {
          line: 17,
          column: 24,
        },
        end: {
          line: 55,
          column: 1,
        },
      },
      4: {
        start: {
          line: 18,
          column: 25,
        },
        end: {
          line: 33,
          column: 3,
        },
      },
      5: {
        start: {
          line: 19,
          column: 4,
        },
        end: {
          line: 32,
          column: 5,
        },
      },
      6: {
        start: {
          line: 20,
          column: 22,
        },
        end: {
          line: 22,
          column: 8,
        },
      },
      7: {
        start: {
          line: 24,
          column: 6,
        },
        end: {
          line: 26,
          column: 7,
        },
      },
      8: {
        start: {
          line: 25,
          column: 8,
        },
        end: {
          line: 25,
          column: 55,
        },
      },
      9: {
        start: {
          line: 27,
          column: 6,
        },
        end: {
          line: 27,
          column: 30,
        },
      },
      10: {
        start: {
          line: 28,
          column: 6,
        },
        end: {
          line: 28,
          column: 40,
        },
      },
      11: {
        start: {
          line: 29,
          column: 6,
        },
        end: {
          line: 29,
          column: 20,
        },
      },
      12: {
        start: {
          line: 31,
          column: 6,
        },
        end: {
          line: 31,
          column: 39,
        },
      },
      13: {
        start: {
          line: 35,
          column: 2,
        },
        end: {
          line: 54,
          column: 4,
        },
      },
      14: {
        start: {
          line: 36,
          column: 19,
        },
        end: {
          line: 36,
          column: 29,
        },
      },
      15: {
        start: {
          line: 38,
          column: 4,
        },
        end: {
          line: 53,
          column: 5,
        },
      },
      16: {
        start: {
          line: 40,
          column: 8,
        },
        end: {
          line: 40,
          column: 56,
        },
      },
      17: {
        start: {
          line: 42,
          column: 8,
        },
        end: {
          line: 42,
          column: 62,
        },
      },
      18: {
        start: {
          line: 44,
          column: 8,
        },
        end: {
          line: 44,
          column: 60,
        },
      },
      19: {
        start: {
          line: 46,
          column: 8,
        },
        end: {
          line: 46,
          column: 61,
        },
      },
      20: {
        start: {
          line: 48,
          column: 8,
        },
        end: {
          line: 48,
          column: 54,
        },
      },
      21: {
        start: {
          line: 50,
          column: 8,
        },
        end: {
          line: 50,
          column: 60,
        },
      },
      22: {
        start: {
          line: 52,
          column: 8,
        },
        end: {
          line: 52,
          column: 62,
        },
      },
      23: {
        start: {
          line: 57,
          column: 27,
        },
        end: {
          line: 92,
          column: 1,
        },
      },
      24: {
        start: {
          line: 58,
          column: 25,
        },
        end: {
          line: 72,
          column: 3,
        },
      },
      25: {
        start: {
          line: 59,
          column: 4,
        },
        end: {
          line: 71,
          column: 5,
        },
      },
      26: {
        start: {
          line: 60,
          column: 22,
        },
        end: {
          line: 62,
          column: 8,
        },
      },
      27: {
        start: {
          line: 63,
          column: 6,
        },
        end: {
          line: 65,
          column: 7,
        },
      },
      28: {
        start: {
          line: 64,
          column: 8,
        },
        end: {
          line: 64,
          column: 55,
        },
      },
      29: {
        start: {
          line: 66,
          column: 6,
        },
        end: {
          line: 66,
          column: 30,
        },
      },
      30: {
        start: {
          line: 67,
          column: 6,
        },
        end: {
          line: 67,
          column: 40,
        },
      },
      31: {
        start: {
          line: 68,
          column: 6,
        },
        end: {
          line: 68,
          column: 20,
        },
      },
      32: {
        start: {
          line: 70,
          column: 6,
        },
        end: {
          line: 70,
          column: 39,
        },
      },
      33: {
        start: {
          line: 74,
          column: 2,
        },
        end: {
          line: 91,
          column: 4,
        },
      },
      34: {
        start: {
          line: 75,
          column: 4,
        },
        end: {
          line: 90,
          column: 5,
        },
      },
      35: {
        start: {
          line: 77,
          column: 8,
        },
        end: {
          line: 77,
          column: 52,
        },
      },
      36: {
        start: {
          line: 79,
          column: 8,
        },
        end: {
          line: 79,
          column: 58,
        },
      },
      37: {
        start: {
          line: 81,
          column: 8,
        },
        end: {
          line: 81,
          column: 56,
        },
      },
      38: {
        start: {
          line: 83,
          column: 8,
        },
        end: {
          line: 83,
          column: 57,
        },
      },
      39: {
        start: {
          line: 85,
          column: 8,
        },
        end: {
          line: 85,
          column: 50,
        },
      },
      40: {
        start: {
          line: 87,
          column: 8,
        },
        end: {
          line: 87,
          column: 56,
        },
      },
      41: {
        start: {
          line: 89,
          column: 8,
        },
        end: {
          line: 89,
          column: 62,
        },
      },
    },
    fnMap: {
      0: {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 24,
          },
          end: {
            line: 17,
            column: 25,
          },
        },
        loc: {
          start: {
            line: 17,
            column: 38,
          },
          end: {
            line: 55,
            column: 1,
          },
        },
        line: 17,
      },
      1: {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 25,
          },
          end: {
            line: 18,
            column: 26,
          },
        },
        loc: {
          start: {
            line: 18,
            column: 65,
          },
          end: {
            line: 33,
            column: 3,
          },
        },
        line: 18,
      },
      2: {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 9,
          },
          end: {
            line: 35,
            column: 10,
          },
        },
        loc: {
          start: {
            line: 35,
            column: 29,
          },
          end: {
            line: 54,
            column: 3,
          },
        },
        line: 35,
      },
      3: {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 57,
            column: 27,
          },
          end: {
            line: 57,
            column: 28,
          },
        },
        loc: {
          start: {
            line: 57,
            column: 41,
          },
          end: {
            line: 92,
            column: 1,
          },
        },
        line: 57,
      },
      4: {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 58,
            column: 25,
          },
          end: {
            line: 58,
            column: 26,
          },
        },
        loc: {
          start: {
            line: 58,
            column: 61,
          },
          end: {
            line: 72,
            column: 3,
          },
        },
        line: 58,
      },
      5: {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 74,
            column: 9,
          },
          end: {
            line: 74,
            column: 10,
          },
        },
        loc: {
          start: {
            line: 74,
            column: 29,
          },
          end: {
            line: 91,
            column: 3,
          },
        },
        line: 74,
      },
    },
    branchMap: {
      0: {
        loc: {
          start: {
            line: 24,
            column: 6,
          },
          end: {
            line: 26,
            column: 7,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 24,
              column: 6,
            },
            end: {
              line: 26,
              column: 7,
            },
          },
          {
            start: {
              line: undefined,
              column: undefined,
            },
            end: {
              line: undefined,
              column: undefined,
            },
          },
        ],
        line: 24,
      },
      1: {
        loc: {
          start: {
            line: 38,
            column: 4,
          },
          end: {
            line: 53,
            column: 5,
          },
        },
        type: "switch",
        locations: [
          {
            start: {
              line: 39,
              column: 6,
            },
            end: {
              line: 40,
              column: 56,
            },
          },
          {
            start: {
              line: 41,
              column: 6,
            },
            end: {
              line: 42,
              column: 62,
            },
          },
          {
            start: {
              line: 43,
              column: 6,
            },
            end: {
              line: 44,
              column: 60,
            },
          },
          {
            start: {
              line: 45,
              column: 6,
            },
            end: {
              line: 46,
              column: 61,
            },
          },
          {
            start: {
              line: 47,
              column: 6,
            },
            end: {
              line: 48,
              column: 54,
            },
          },
          {
            start: {
              line: 49,
              column: 6,
            },
            end: {
              line: 50,
              column: 60,
            },
          },
          {
            start: {
              line: 51,
              column: 6,
            },
            end: {
              line: 52,
              column: 62,
            },
          },
        ],
        line: 38,
      },
      2: {
        loc: {
          start: {
            line: 63,
            column: 6,
          },
          end: {
            line: 65,
            column: 7,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 63,
              column: 6,
            },
            end: {
              line: 65,
              column: 7,
            },
          },
          {
            start: {
              line: undefined,
              column: undefined,
            },
            end: {
              line: undefined,
              column: undefined,
            },
          },
        ],
        line: 63,
      },
      3: {
        loc: {
          start: {
            line: 75,
            column: 4,
          },
          end: {
            line: 90,
            column: 5,
          },
        },
        type: "switch",
        locations: [
          {
            start: {
              line: 76,
              column: 6,
            },
            end: {
              line: 77,
              column: 52,
            },
          },
          {
            start: {
              line: 78,
              column: 6,
            },
            end: {
              line: 79,
              column: 58,
            },
          },
          {
            start: {
              line: 80,
              column: 6,
            },
            end: {
              line: 81,
              column: 56,
            },
          },
          {
            start: {
              line: 82,
              column: 6,
            },
            end: {
              line: 83,
              column: 57,
            },
          },
          {
            start: {
              line: 84,
              column: 6,
            },
            end: {
              line: 85,
              column: 50,
            },
          },
          {
            start: {
              line: 86,
              column: 6,
            },
            end: {
              line: 87,
              column: 56,
            },
          },
          {
            start: {
              line: 88,
              column: 6,
            },
            end: {
              line: 89,
              column: 62,
            },
          },
        ],
        line: 75,
      },
    },
    s: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
      24: 0,
      25: 0,
      26: 0,
      27: 0,
      28: 0,
      29: 0,
      30: 0,
      31: 0,
      32: 0,
      33: 0,
      34: 0,
      35: 0,
      36: 0,
      37: 0,
      38: 0,
      39: 0,
      40: 0,
      41: 0,
    },
    f: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
    b: {
      0: [0, 0],
      1: [0, 0, 0, 0, 0, 0, 0],
      2: [0, 0],
      3: [0, 0, 0, 0, 0, 0, 0],
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cdb2609903a02af92b7d50d38a699310382b0a46",
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
  edu_languages,
  schools,
  edu_faculties,
} = (cov_1ena4chjmq().s[0]++, _models.default);
const { notFound, serverError } =
  (cov_1ena4chjmq().s[1]++, _statusCodes.default);
const { noContent, wrongDatabase } =
  (cov_1ena4chjmq().s[2]++, _customMessages.default);
cov_1ena4chjmq().s[3]++;

const findData = (database) => {
  cov_1ena4chjmq().f[0]++;
  cov_1ena4chjmq().s[4]++;

  const findInDatabase = async (databaseTable, id, req, next) => {
    cov_1ena4chjmq().f[1]++;
    cov_1ena4chjmq().s[5]++;

    try {
      const content =
        (cov_1ena4chjmq().s[6]++,
        await databaseTable.findOne({
          where: {
            id,
            active: true,
          },
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
    const { id } = (cov_1ena4chjmq().s[14]++, req.params);
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

      case "schools":
        cov_1ena4chjmq().b[1][4]++;
        cov_1ena4chjmq().s[20]++;
        return findInDatabase(schools, id, req, next);

      case "edu_faculties":
        cov_1ena4chjmq().b[1][5]++;
        cov_1ena4chjmq().s[21]++;
        return findInDatabase(edu_faculties, id, req, next);

      default:
        cov_1ena4chjmq().b[1][6]++;
        cov_1ena4chjmq().s[22]++;
        return next(new _appError.default(wrongDatabase, serverError));
    }
  };
};

exports.findData = findData;
cov_1ena4chjmq().s[23]++;

const findAllData = (database) => {
  cov_1ena4chjmq().f[3]++;
  cov_1ena4chjmq().s[24]++;

  const findInDatabase = async (databaseTable, req, next) => {
    cov_1ena4chjmq().f[4]++;
    cov_1ena4chjmq().s[25]++;

    try {
      const content =
        (cov_1ena4chjmq().s[26]++,
        await databaseTable.findAll({
          where: {
            active: true,
          },
        }));
      cov_1ena4chjmq().s[27]++;

      if (!content) {
        cov_1ena4chjmq().b[2][0]++;
        cov_1ena4chjmq().s[28]++;
        return next(new _appError.default(noContent, notFound));
      } else {
        cov_1ena4chjmq().b[2][1]++;
      }

      cov_1ena4chjmq().s[29]++;
      req.foundData = content;
      cov_1ena4chjmq().s[30]++;
      req.databaseTable = databaseTable;
      cov_1ena4chjmq().s[31]++;
      return next();
    } catch (error) {
      cov_1ena4chjmq().s[32]++;
      return next(new _appError.default(error));
    }
  };

  cov_1ena4chjmq().s[33]++;
  return (req, res, next) => {
    cov_1ena4chjmq().f[5]++;
    cov_1ena4chjmq().s[34]++;

    switch (database) {
      case "countries":
        cov_1ena4chjmq().b[3][0]++;
        cov_1ena4chjmq().s[35]++;
        return findInDatabase(countries, req, next);

      case "edu_permissions":
        cov_1ena4chjmq().b[3][1]++;
        cov_1ena4chjmq().s[36]++;
        return findInDatabase(edu_permissions, req, next);

      case "edu_languages":
        cov_1ena4chjmq().b[3][2]++;
        cov_1ena4chjmq().s[37]++;
        return findInDatabase(edu_languages, req, next);

      case "edu_user_types":
        cov_1ena4chjmq().b[3][3]++;
        cov_1ena4chjmq().s[38]++;
        return findInDatabase(edu_user_types, req, next);

      case "schools":
        cov_1ena4chjmq().b[3][4]++;
        cov_1ena4chjmq().s[39]++;
        return findInDatabase(schools, req, next);

      case "edu_faculties":
        cov_1ena4chjmq().b[3][5]++;
        cov_1ena4chjmq().s[40]++;
        return findInDatabase(edu_faculties, req, next);

      default:
        cov_1ena4chjmq().b[3][6]++;
        cov_1ena4chjmq().s[41]++;
        return next(new _appError.default(wrongDatabase, serverError));
    }
  };
};

exports.findAllData = findAllData;
