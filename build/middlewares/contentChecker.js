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
  var hash = "057f3984d8c699658fd6f07dc479e864f4b32489";
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
          line: 62,
          column: 1,
        },
      },
      4: {
        start: {
          line: 20,
          column: 25,
        },
        end: {
          line: 31,
          column: 4,
        },
      },
      5: {
        start: {
          line: 21,
          column: 20,
        },
        end: {
          line: 23,
          column: 6,
        },
      },
      6: {
        start: {
          line: 25,
          column: 4,
        },
        end: {
          line: 27,
          column: 5,
        },
      },
      7: {
        start: {
          line: 26,
          column: 6,
        },
        end: {
          line: 26,
          column: 53,
        },
      },
      8: {
        start: {
          line: 28,
          column: 4,
        },
        end: {
          line: 28,
          column: 28,
        },
      },
      9: {
        start: {
          line: 29,
          column: 4,
        },
        end: {
          line: 29,
          column: 38,
        },
      },
      10: {
        start: {
          line: 30,
          column: 4,
        },
        end: {
          line: 30,
          column: 18,
        },
      },
      11: {
        start: {
          line: 33,
          column: 2,
        },
        end: {
          line: 61,
          column: 4,
        },
      },
      12: {
        start: {
          line: 34,
          column: 4,
        },
        end: {
          line: 34,
          column: 17,
        },
      },
      13: {
        start: {
          line: 35,
          column: 4,
        },
        end: {
          line: 35,
          column: 18,
        },
      },
      14: {
        start: {
          line: 36,
          column: 4,
        },
        end: {
          line: 36,
          column: 23,
        },
      },
      15: {
        start: {
          line: 37,
          column: 4,
        },
        end: {
          line: 37,
          column: 23,
        },
      },
      16: {
        start: {
          line: 39,
          column: 4,
        },
        end: {
          line: 60,
          column: 5,
        },
      },
      17: {
        start: {
          line: 41,
          column: 8,
        },
        end: {
          line: 41,
          column: 33,
        },
      },
      18: {
        start: {
          line: 42,
          column: 8,
        },
        end: {
          line: 42,
          column: 32,
        },
      },
      19: {
        start: {
          line: 44,
          column: 8,
        },
        end: {
          line: 44,
          column: 39,
        },
      },
      20: {
        start: {
          line: 45,
          column: 8,
        },
        end: {
          line: 45,
          column: 32,
        },
      },
      21: {
        start: {
          line: 47,
          column: 8,
        },
        end: {
          line: 47,
          column: 37,
        },
      },
      22: {
        start: {
          line: 48,
          column: 8,
        },
        end: {
          line: 48,
          column: 32,
        },
      },
      23: {
        start: {
          line: 50,
          column: 8,
        },
        end: {
          line: 50,
          column: 38,
        },
      },
      24: {
        start: {
          line: 51,
          column: 8,
        },
        end: {
          line: 51,
          column: 32,
        },
      },
      25: {
        start: {
          line: 53,
          column: 8,
        },
        end: {
          line: 53,
          column: 31,
        },
      },
      26: {
        start: {
          line: 54,
          column: 8,
        },
        end: {
          line: 54,
          column: 32,
        },
      },
      27: {
        start: {
          line: 56,
          column: 8,
        },
        end: {
          line: 56,
          column: 37,
        },
      },
      28: {
        start: {
          line: 57,
          column: 8,
        },
        end: {
          line: 57,
          column: 32,
        },
      },
      29: {
        start: {
          line: 59,
          column: 8,
        },
        end: {
          line: 59,
          column: 62,
        },
      },
      30: {
        start: {
          line: 64,
          column: 27,
        },
        end: {
          line: 105,
          column: 1,
        },
      },
      31: {
        start: {
          line: 66,
          column: 25,
        },
        end: {
          line: 76,
          column: 4,
        },
      },
      32: {
        start: {
          line: 67,
          column: 20,
        },
        end: {
          line: 69,
          column: 6,
        },
      },
      33: {
        start: {
          line: 70,
          column: 4,
        },
        end: {
          line: 72,
          column: 5,
        },
      },
      34: {
        start: {
          line: 71,
          column: 6,
        },
        end: {
          line: 71,
          column: 53,
        },
      },
      35: {
        start: {
          line: 73,
          column: 4,
        },
        end: {
          line: 73,
          column: 28,
        },
      },
      36: {
        start: {
          line: 74,
          column: 4,
        },
        end: {
          line: 74,
          column: 38,
        },
      },
      37: {
        start: {
          line: 75,
          column: 4,
        },
        end: {
          line: 75,
          column: 18,
        },
      },
      38: {
        start: {
          line: 78,
          column: 2,
        },
        end: {
          line: 104,
          column: 4,
        },
      },
      39: {
        start: {
          line: 79,
          column: 4,
        },
        end: {
          line: 79,
          column: 17,
        },
      },
      40: {
        start: {
          line: 80,
          column: 4,
        },
        end: {
          line: 80,
          column: 18,
        },
      },
      41: {
        start: {
          line: 81,
          column: 4,
        },
        end: {
          line: 81,
          column: 23,
        },
      },
      42: {
        start: {
          line: 82,
          column: 4,
        },
        end: {
          line: 103,
          column: 5,
        },
      },
      43: {
        start: {
          line: 84,
          column: 8,
        },
        end: {
          line: 84,
          column: 33,
        },
      },
      44: {
        start: {
          line: 85,
          column: 8,
        },
        end: {
          line: 85,
          column: 32,
        },
      },
      45: {
        start: {
          line: 87,
          column: 8,
        },
        end: {
          line: 87,
          column: 39,
        },
      },
      46: {
        start: {
          line: 88,
          column: 8,
        },
        end: {
          line: 88,
          column: 32,
        },
      },
      47: {
        start: {
          line: 90,
          column: 8,
        },
        end: {
          line: 90,
          column: 37,
        },
      },
      48: {
        start: {
          line: 91,
          column: 8,
        },
        end: {
          line: 91,
          column: 32,
        },
      },
      49: {
        start: {
          line: 93,
          column: 8,
        },
        end: {
          line: 93,
          column: 38,
        },
      },
      50: {
        start: {
          line: 94,
          column: 8,
        },
        end: {
          line: 94,
          column: 32,
        },
      },
      51: {
        start: {
          line: 96,
          column: 8,
        },
        end: {
          line: 96,
          column: 31,
        },
      },
      52: {
        start: {
          line: 97,
          column: 8,
        },
        end: {
          line: 97,
          column: 32,
        },
      },
      53: {
        start: {
          line: 99,
          column: 8,
        },
        end: {
          line: 99,
          column: 37,
        },
      },
      54: {
        start: {
          line: 100,
          column: 8,
        },
        end: {
          line: 100,
          column: 32,
        },
      },
      55: {
        start: {
          line: 102,
          column: 8,
        },
        end: {
          line: 102,
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
            line: 62,
            column: 1,
          },
        },
        line: 18,
      },
      1: {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 36,
          },
          end: {
            line: 20,
            column: 37,
          },
        },
        loc: {
          start: {
            line: 20,
            column: 48,
          },
          end: {
            line: 31,
            column: 3,
          },
        },
        line: 20,
      },
      2: {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 33,
            column: 9,
          },
          end: {
            line: 33,
            column: 10,
          },
        },
        loc: {
          start: {
            line: 33,
            column: 46,
          },
          end: {
            line: 61,
            column: 3,
          },
        },
        line: 33,
      },
      3: {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 64,
            column: 27,
          },
          end: {
            line: 64,
            column: 28,
          },
        },
        loc: {
          start: {
            line: 64,
            column: 41,
          },
          end: {
            line: 105,
            column: 1,
          },
        },
        line: 64,
      },
      4: {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 66,
            column: 36,
          },
          end: {
            line: 66,
            column: 37,
          },
        },
        loc: {
          start: {
            line: 66,
            column: 48,
          },
          end: {
            line: 76,
            column: 3,
          },
        },
        line: 66,
      },
      5: {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 78,
            column: 9,
          },
          end: {
            line: 78,
            column: 10,
          },
        },
        loc: {
          start: {
            line: 78,
            column: 46,
          },
          end: {
            line: 104,
            column: 3,
          },
        },
        line: 78,
      },
    },
    branchMap: {
      0: {
        loc: {
          start: {
            line: 25,
            column: 4,
          },
          end: {
            line: 27,
            column: 5,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 25,
              column: 4,
            },
            end: {
              line: 27,
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
        line: 25,
      },
      1: {
        loc: {
          start: {
            line: 39,
            column: 4,
          },
          end: {
            line: 60,
            column: 5,
          },
        },
        type: "switch",
        locations: [
          {
            start: {
              line: 40,
              column: 6,
            },
            end: {
              line: 42,
              column: 32,
            },
          },
          {
            start: {
              line: 43,
              column: 6,
            },
            end: {
              line: 45,
              column: 32,
            },
          },
          {
            start: {
              line: 46,
              column: 6,
            },
            end: {
              line: 48,
              column: 32,
            },
          },
          {
            start: {
              line: 49,
              column: 6,
            },
            end: {
              line: 51,
              column: 32,
            },
          },
          {
            start: {
              line: 52,
              column: 6,
            },
            end: {
              line: 54,
              column: 32,
            },
          },
          {
            start: {
              line: 55,
              column: 6,
            },
            end: {
              line: 57,
              column: 32,
            },
          },
          {
            start: {
              line: 58,
              column: 6,
            },
            end: {
              line: 59,
              column: 62,
            },
          },
        ],
        line: 39,
      },
      2: {
        loc: {
          start: {
            line: 70,
            column: 4,
          },
          end: {
            line: 72,
            column: 5,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 70,
              column: 4,
            },
            end: {
              line: 72,
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
        line: 70,
      },
      3: {
        loc: {
          start: {
            line: 82,
            column: 4,
          },
          end: {
            line: 103,
            column: 5,
          },
        },
        type: "switch",
        locations: [
          {
            start: {
              line: 83,
              column: 6,
            },
            end: {
              line: 85,
              column: 32,
            },
          },
          {
            start: {
              line: 86,
              column: 6,
            },
            end: {
              line: 88,
              column: 32,
            },
          },
          {
            start: {
              line: 89,
              column: 6,
            },
            end: {
              line: 91,
              column: 32,
            },
          },
          {
            start: {
              line: 92,
              column: 6,
            },
            end: {
              line: 94,
              column: 32,
            },
          },
          {
            start: {
              line: 95,
              column: 6,
            },
            end: {
              line: 97,
              column: 32,
            },
          },
          {
            start: {
              line: 98,
              column: 6,
            },
            end: {
              line: 100,
              column: 32,
            },
          },
          {
            start: {
              line: 101,
              column: 6,
            },
            end: {
              line: 102,
              column: 62,
            },
          },
        ],
        line: 82,
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
      42: 0,
      43: 0,
      44: 0,
      45: 0,
      46: 0,
      47: 0,
      48: 0,
      49: 0,
      50: 0,
      51: 0,
      52: 0,
      53: 0,
      54: 0,
      55: 0,
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
    hash: "057f3984d8c699658fd6f07dc479e864f4b32489",
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
  let id, req, res, next, databaseTable;
  const findInDatabase =
    (cov_1ena4chjmq().s[4]++,
    (0, _catchAsync.default)(async () => {
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
  return (request, response, nextFunction) => {
    cov_1ena4chjmq().f[2]++;
    cov_1ena4chjmq().s[12]++;
    req = request;
    cov_1ena4chjmq().s[13]++;
    res = response;
    cov_1ena4chjmq().s[14]++;
    next = nextFunction;
    cov_1ena4chjmq().s[15]++;
    id = req.params.id;
    cov_1ena4chjmq().s[16]++;

    switch (database) {
      case "countries":
        cov_1ena4chjmq().b[1][0]++;
        cov_1ena4chjmq().s[17]++;
        databaseTable = countries;
        cov_1ena4chjmq().s[18]++;
        return findInDatabase();

      case "edu_permissions":
        cov_1ena4chjmq().b[1][1]++;
        cov_1ena4chjmq().s[19]++;
        databaseTable = edu_permissions;
        cov_1ena4chjmq().s[20]++;
        return findInDatabase();

      case "edu_languages":
        cov_1ena4chjmq().b[1][2]++;
        cov_1ena4chjmq().s[21]++;
        databaseTable = edu_languages;
        cov_1ena4chjmq().s[22]++;
        return findInDatabase();

      case "edu_user_types":
        cov_1ena4chjmq().b[1][3]++;
        cov_1ena4chjmq().s[23]++;
        databaseTable = edu_user_types;
        cov_1ena4chjmq().s[24]++;
        return findInDatabase();

      case "schools":
        cov_1ena4chjmq().b[1][4]++;
        cov_1ena4chjmq().s[25]++;
        databaseTable = schools;
        cov_1ena4chjmq().s[26]++;
        return findInDatabase();

      case "edu_faculties":
        cov_1ena4chjmq().b[1][5]++;
        cov_1ena4chjmq().s[27]++;
        databaseTable = edu_faculties;
        cov_1ena4chjmq().s[28]++;
        return findInDatabase();

      default:
        cov_1ena4chjmq().b[1][6]++;
        cov_1ena4chjmq().s[29]++;
        return next(new _appError.default(wrongDatabase, serverError));
    }
  };
};

exports.findData = findData;
cov_1ena4chjmq().s[30]++;

const findAllData = (database) => {
  cov_1ena4chjmq().f[3]++;
  let req, res, next, databaseTable;
  const findInDatabase =
    (cov_1ena4chjmq().s[31]++,
    (0, _catchAsync.default)(async () => {
      cov_1ena4chjmq().f[4]++;
      const content =
        (cov_1ena4chjmq().s[32]++,
        await databaseTable.findAll({
          where: {
            active: true,
          },
        }));
      cov_1ena4chjmq().s[33]++;

      if (!content) {
        cov_1ena4chjmq().b[2][0]++;
        cov_1ena4chjmq().s[34]++;
        return next(new _appError.default(noContent, notFound));
      } else {
        cov_1ena4chjmq().b[2][1]++;
      }

      cov_1ena4chjmq().s[35]++;
      req.foundData = content;
      cov_1ena4chjmq().s[36]++;
      req.databaseTable = databaseTable;
      cov_1ena4chjmq().s[37]++;
      return next();
    }));
  cov_1ena4chjmq().s[38]++;
  return (request, response, nextFunction) => {
    cov_1ena4chjmq().f[5]++;
    cov_1ena4chjmq().s[39]++;
    req = request;
    cov_1ena4chjmq().s[40]++;
    res = response;
    cov_1ena4chjmq().s[41]++;
    next = nextFunction;
    cov_1ena4chjmq().s[42]++;

    switch (database) {
      case "countries":
        cov_1ena4chjmq().b[3][0]++;
        cov_1ena4chjmq().s[43]++;
        databaseTable = countries;
        cov_1ena4chjmq().s[44]++;
        return findInDatabase();

      case "edu_permissions":
        cov_1ena4chjmq().b[3][1]++;
        cov_1ena4chjmq().s[45]++;
        databaseTable = edu_permissions;
        cov_1ena4chjmq().s[46]++;
        return findInDatabase();

      case "edu_languages":
        cov_1ena4chjmq().b[3][2]++;
        cov_1ena4chjmq().s[47]++;
        databaseTable = edu_languages;
        cov_1ena4chjmq().s[48]++;
        return findInDatabase();

      case "edu_user_types":
        cov_1ena4chjmq().b[3][3]++;
        cov_1ena4chjmq().s[49]++;
        databaseTable = edu_user_types;
        cov_1ena4chjmq().s[50]++;
        return findInDatabase();

      case "schools":
        cov_1ena4chjmq().b[3][4]++;
        cov_1ena4chjmq().s[51]++;
        databaseTable = schools;
        cov_1ena4chjmq().s[52]++;
        return findInDatabase();

      case "edu_faculties":
        cov_1ena4chjmq().b[3][5]++;
        cov_1ena4chjmq().s[53]++;
        databaseTable = edu_faculties;
        cov_1ena4chjmq().s[54]++;
        return findInDatabase();

      default:
        cov_1ena4chjmq().b[3][6]++;
        cov_1ena4chjmq().s[55]++;
        return next(new _appError.default(wrongDatabase, serverError));
    }
  };
};

exports.findAllData = findAllData;
