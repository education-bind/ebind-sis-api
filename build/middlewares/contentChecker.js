"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.findData = exports.findAllData = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _appError = _interopRequireDefault(require("../utils/appError"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _customMessages = _interopRequireDefault(
  require("../utils/customMessages")
);

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_1ena4chjmq() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\contentChecker.js";
  var hash = "223a93dbb5130a395d3e3f9d43c963cc84a93e07";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\contentChecker.js",
    statementMap: {
      0: {
        start: {
          line: 14,
          column: 4,
        },
        end: {
          line: 14,
          column: 6,
        },
      },
      1: {
        start: {
          line: 15,
          column: 34,
        },
        end: {
          line: 15,
          column: 44,
        },
      },
      2: {
        start: {
          line: 16,
          column: 37,
        },
        end: {
          line: 16,
          column: 45,
        },
      },
      3: {
        start: {
          line: 18,
          column: 24,
        },
        end: {
          line: 52,
          column: 1,
        },
      },
      4: {
        start: {
          line: 19,
          column: 25,
        },
        end: {
          line: 30,
          column: 4,
        },
      },
      5: {
        start: {
          line: 20,
          column: 20,
        },
        end: {
          line: 22,
          column: 6,
        },
      },
      6: {
        start: {
          line: 24,
          column: 4,
        },
        end: {
          line: 26,
          column: 5,
        },
      },
      7: {
        start: {
          line: 25,
          column: 6,
        },
        end: {
          line: 25,
          column: 53,
        },
      },
      8: {
        start: {
          line: 27,
          column: 4,
        },
        end: {
          line: 27,
          column: 28,
        },
      },
      9: {
        start: {
          line: 28,
          column: 4,
        },
        end: {
          line: 28,
          column: 38,
        },
      },
      10: {
        start: {
          line: 29,
          column: 4,
        },
        end: {
          line: 29,
          column: 18,
        },
      },
      11: {
        start: {
          line: 32,
          column: 2,
        },
        end: {
          line: 51,
          column: 4,
        },
      },
      12: {
        start: {
          line: 33,
          column: 19,
        },
        end: {
          line: 33,
          column: 29,
        },
      },
      13: {
        start: {
          line: 35,
          column: 4,
        },
        end: {
          line: 50,
          column: 5,
        },
      },
      14: {
        start: {
          line: 37,
          column: 8,
        },
        end: {
          line: 37,
          column: 56,
        },
      },
      15: {
        start: {
          line: 39,
          column: 8,
        },
        end: {
          line: 39,
          column: 62,
        },
      },
      16: {
        start: {
          line: 41,
          column: 8,
        },
        end: {
          line: 41,
          column: 60,
        },
      },
      17: {
        start: {
          line: 43,
          column: 8,
        },
        end: {
          line: 43,
          column: 61,
        },
      },
      18: {
        start: {
          line: 45,
          column: 8,
        },
        end: {
          line: 45,
          column: 54,
        },
      },
      19: {
        start: {
          line: 47,
          column: 8,
        },
        end: {
          line: 47,
          column: 60,
        },
      },
      20: {
        start: {
          line: 49,
          column: 8,
        },
        end: {
          line: 49,
          column: 62,
        },
      },
      21: {
        start: {
          line: 54,
          column: 27,
        },
        end: {
          line: 85,
          column: 1,
        },
      },
      22: {
        start: {
          line: 55,
          column: 25,
        },
        end: {
          line: 65,
          column: 4,
        },
      },
      23: {
        start: {
          line: 56,
          column: 20,
        },
        end: {
          line: 58,
          column: 6,
        },
      },
      24: {
        start: {
          line: 59,
          column: 4,
        },
        end: {
          line: 61,
          column: 5,
        },
      },
      25: {
        start: {
          line: 60,
          column: 6,
        },
        end: {
          line: 60,
          column: 53,
        },
      },
      26: {
        start: {
          line: 62,
          column: 4,
        },
        end: {
          line: 62,
          column: 28,
        },
      },
      27: {
        start: {
          line: 63,
          column: 4,
        },
        end: {
          line: 63,
          column: 38,
        },
      },
      28: {
        start: {
          line: 64,
          column: 4,
        },
        end: {
          line: 64,
          column: 18,
        },
      },
      29: {
        start: {
          line: 67,
          column: 2,
        },
        end: {
          line: 84,
          column: 4,
        },
      },
      30: {
        start: {
          line: 68,
          column: 4,
        },
        end: {
          line: 83,
          column: 5,
        },
      },
      31: {
        start: {
          line: 70,
          column: 8,
        },
        end: {
          line: 70,
          column: 52,
        },
      },
      32: {
        start: {
          line: 72,
          column: 8,
        },
        end: {
          line: 72,
          column: 58,
        },
      },
      33: {
        start: {
          line: 74,
          column: 8,
        },
        end: {
          line: 74,
          column: 56,
        },
      },
      34: {
        start: {
          line: 76,
          column: 8,
        },
        end: {
          line: 76,
          column: 57,
        },
      },
      35: {
        start: {
          line: 78,
          column: 8,
        },
        end: {
          line: 78,
          column: 50,
        },
      },
      36: {
        start: {
          line: 80,
          column: 8,
        },
        end: {
          line: 80,
          column: 56,
        },
      },
      37: {
        start: {
          line: 82,
          column: 8,
        },
        end: {
          line: 82,
          column: 62,
        },
      },
    },
    fnMap: {
      0: {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 24,
          },
          end: {
            line: 18,
            column: 25,
          },
        },
        loc: {
          start: {
            line: 18,
            column: 38,
          },
          end: {
            line: 52,
            column: 1,
          },
        },
        line: 18,
      },
      1: {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 36,
          },
          end: {
            line: 19,
            column: 37,
          },
        },
        loc: {
          start: {
            line: 19,
            column: 76,
          },
          end: {
            line: 30,
            column: 3,
          },
        },
        line: 19,
      },
      2: {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 9,
          },
          end: {
            line: 32,
            column: 10,
          },
        },
        loc: {
          start: {
            line: 32,
            column: 29,
          },
          end: {
            line: 51,
            column: 3,
          },
        },
        line: 32,
      },
      3: {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 54,
            column: 27,
          },
          end: {
            line: 54,
            column: 28,
          },
        },
        loc: {
          start: {
            line: 54,
            column: 41,
          },
          end: {
            line: 85,
            column: 1,
          },
        },
        line: 54,
      },
      4: {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 55,
            column: 36,
          },
          end: {
            line: 55,
            column: 37,
          },
        },
        loc: {
          start: {
            line: 55,
            column: 72,
          },
          end: {
            line: 65,
            column: 3,
          },
        },
        line: 55,
      },
      5: {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 67,
            column: 9,
          },
          end: {
            line: 67,
            column: 10,
          },
        },
        loc: {
          start: {
            line: 67,
            column: 29,
          },
          end: {
            line: 84,
            column: 3,
          },
        },
        line: 67,
      },
    },
    branchMap: {
      0: {
        loc: {
          start: {
            line: 24,
            column: 4,
          },
          end: {
            line: 26,
            column: 5,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 24,
              column: 4,
            },
            end: {
              line: 26,
              column: 5,
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
            line: 35,
            column: 4,
          },
          end: {
            line: 50,
            column: 5,
          },
        },
        type: "switch",
        locations: [
          {
            start: {
              line: 36,
              column: 6,
            },
            end: {
              line: 37,
              column: 56,
            },
          },
          {
            start: {
              line: 38,
              column: 6,
            },
            end: {
              line: 39,
              column: 62,
            },
          },
          {
            start: {
              line: 40,
              column: 6,
            },
            end: {
              line: 41,
              column: 60,
            },
          },
          {
            start: {
              line: 42,
              column: 6,
            },
            end: {
              line: 43,
              column: 61,
            },
          },
          {
            start: {
              line: 44,
              column: 6,
            },
            end: {
              line: 45,
              column: 54,
            },
          },
          {
            start: {
              line: 46,
              column: 6,
            },
            end: {
              line: 47,
              column: 60,
            },
          },
          {
            start: {
              line: 48,
              column: 6,
            },
            end: {
              line: 49,
              column: 62,
            },
          },
        ],
        line: 35,
      },
      2: {
        loc: {
          start: {
            line: 59,
            column: 4,
          },
          end: {
            line: 61,
            column: 5,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 59,
              column: 4,
            },
            end: {
              line: 61,
              column: 5,
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
        line: 59,
      },
      3: {
        loc: {
          start: {
            line: 68,
            column: 4,
          },
          end: {
            line: 83,
            column: 5,
          },
        },
        type: "switch",
        locations: [
          {
            start: {
              line: 69,
              column: 6,
            },
            end: {
              line: 70,
              column: 52,
            },
          },
          {
            start: {
              line: 71,
              column: 6,
            },
            end: {
              line: 72,
              column: 58,
            },
          },
          {
            start: {
              line: 73,
              column: 6,
            },
            end: {
              line: 74,
              column: 56,
            },
          },
          {
            start: {
              line: 75,
              column: 6,
            },
            end: {
              line: 76,
              column: 57,
            },
          },
          {
            start: {
              line: 77,
              column: 6,
            },
            end: {
              line: 78,
              column: 50,
            },
          },
          {
            start: {
              line: 79,
              column: 6,
            },
            end: {
              line: 80,
              column: 56,
            },
          },
          {
            start: {
              line: 81,
              column: 6,
            },
            end: {
              line: 82,
              column: 62,
            },
          },
        ],
        line: 68,
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
    hash: "223a93dbb5130a395d3e3f9d43c963cc84a93e07",
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
  const findInDatabase =
    (cov_1ena4chjmq().s[4]++,
    (0, _catchAsync.default)(async (databaseTable, id, req, next) => {
      cov_1ena4chjmq().f[1]++;
      const content =
        (cov_1ena4chjmq().s[5]++,
        await databaseTable.findOne({
          where: {
            id,
            active: true,
          },
        }));
      cov_1ena4chjmq().s[6]++;

      if (!content) {
        cov_1ena4chjmq().b[0][0]++;
        cov_1ena4chjmq().s[7]++;
        return next(new _appError.default(noContent, notFound));
      } else {
        cov_1ena4chjmq().b[0][1]++;
      }

      cov_1ena4chjmq().s[8]++;
      req.foundData = content;
      cov_1ena4chjmq().s[9]++;
      req.databaseTable = databaseTable;
      cov_1ena4chjmq().s[10]++;
      return next();
    }));
  cov_1ena4chjmq().s[11]++;
  return (req, res, next) => {
    cov_1ena4chjmq().f[2]++;
    const { id } = (cov_1ena4chjmq().s[12]++, req.params);
    cov_1ena4chjmq().s[13]++;

    switch (database) {
      case "countries":
        cov_1ena4chjmq().b[1][0]++;
        cov_1ena4chjmq().s[14]++;
        return findInDatabase(countries, id, req, next);

      case "edu_permissions":
        cov_1ena4chjmq().b[1][1]++;
        cov_1ena4chjmq().s[15]++;
        return findInDatabase(edu_permissions, id, req, next);

      case "edu_languages":
        cov_1ena4chjmq().b[1][2]++;
        cov_1ena4chjmq().s[16]++;
        return findInDatabase(edu_languages, id, req, next);

      case "edu_user_types":
        cov_1ena4chjmq().b[1][3]++;
        cov_1ena4chjmq().s[17]++;
        return findInDatabase(edu_user_types, id, req, next);

      case "schools":
        cov_1ena4chjmq().b[1][4]++;
        cov_1ena4chjmq().s[18]++;
        return findInDatabase(schools, id, req, next);

      case "edu_faculties":
        cov_1ena4chjmq().b[1][5]++;
        cov_1ena4chjmq().s[19]++;
        return findInDatabase(edu_faculties, id, req, next);

      default:
        cov_1ena4chjmq().b[1][6]++;
        cov_1ena4chjmq().s[20]++;
        return next(new _appError.default(wrongDatabase, serverError));
    }
  };
};

exports.findData = findData;
cov_1ena4chjmq().s[21]++;

const findAllData = (database) => {
  cov_1ena4chjmq().f[3]++;
  const findInDatabase =
    (cov_1ena4chjmq().s[22]++,
    (0, _catchAsync.default)(async (databaseTable, req, next) => {
      cov_1ena4chjmq().f[4]++;
      const content =
        (cov_1ena4chjmq().s[23]++,
        await databaseTable.findAll({
          where: {
            active: true,
          },
        }));
      cov_1ena4chjmq().s[24]++;

      if (!content) {
        cov_1ena4chjmq().b[2][0]++;
        cov_1ena4chjmq().s[25]++;
        return next(new _appError.default(noContent, notFound));
      } else {
        cov_1ena4chjmq().b[2][1]++;
      }

      cov_1ena4chjmq().s[26]++;
      req.foundData = content;
      cov_1ena4chjmq().s[27]++;
      req.databaseTable = databaseTable;
      cov_1ena4chjmq().s[28]++;
      return next();
    }));
  cov_1ena4chjmq().s[29]++;
  return (req, res, next) => {
    cov_1ena4chjmq().f[5]++;
    cov_1ena4chjmq().s[30]++;

    switch (database) {
      case "countries":
        cov_1ena4chjmq().b[3][0]++;
        cov_1ena4chjmq().s[31]++;
        return findInDatabase(countries, req, next);

      case "edu_permissions":
        cov_1ena4chjmq().b[3][1]++;
        cov_1ena4chjmq().s[32]++;
        return findInDatabase(edu_permissions, req, next);

      case "edu_languages":
        cov_1ena4chjmq().b[3][2]++;
        cov_1ena4chjmq().s[33]++;
        return findInDatabase(edu_languages, req, next);

      case "edu_user_types":
        cov_1ena4chjmq().b[3][3]++;
        cov_1ena4chjmq().s[34]++;
        return findInDatabase(edu_user_types, req, next);

      case "schools":
        cov_1ena4chjmq().b[3][4]++;
        cov_1ena4chjmq().s[35]++;
        return findInDatabase(schools, req, next);

      case "edu_faculties":
        cov_1ena4chjmq().b[3][5]++;
        cov_1ena4chjmq().s[36]++;
        return findInDatabase(edu_faculties, req, next);

      default:
        cov_1ena4chjmq().b[3][6]++;
        cov_1ena4chjmq().s[37]++;
        return next(new _appError.default(wrongDatabase, serverError));
    }
  };
};

exports.findAllData = findAllData;
