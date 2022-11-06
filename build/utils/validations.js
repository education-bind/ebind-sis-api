"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.validateUpdateSchool =
  exports.validateUpdateEduLanguage =
  exports.validateUpdateEduFaculties =
  exports.validateUpdateCountry =
  exports.validateSchool =
  exports.validateEduUserTypes =
  exports.validateEduPermission =
  exports.validateEduLanguage =
  exports.validateEduFaculties =
  exports.validateCountry =
    void 0;

var _joi = _interopRequireDefault(require("joi"));

var _appError = _interopRequireDefault(require("./appError"));

var _catchAsync = _interopRequireDefault(require("./catchAsync"));

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_1k4oazmcxn() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\validations.js";
  var hash = "4447810820507456fc42fb27ba97ed9eceb3eb01";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\validations.js",
    statementMap: {
      0: {
        start: {
          line: 6,
          column: 23,
        },
        end: {
          line: 6,
          column: 33,
        },
      },
      1: {
        start: {
          line: 9,
          column: 20,
        },
        end: {
          line: 11,
          column: 4,
        },
      },
      2: {
        start: {
          line: 12,
          column: 20,
        },
        end: {
          line: 12,
          column: 29,
        },
      },
      3: {
        start: {
          line: 14,
          column: 2,
        },
        end: {
          line: 21,
          column: 3,
        },
      },
      4: {
        start: {
          line: 15,
          column: 24,
        },
        end: {
          line: 15,
          column: 29,
        },
      },
      5: {
        start: {
          line: 16,
          column: 21,
        },
        end: {
          line: 18,
          column: 17,
        },
      },
      6: {
        start: {
          line: 17,
          column: 20,
        },
        end: {
          line: 17,
          column: 52,
        },
      },
      7: {
        start: {
          line: 20,
          column: 4,
        },
        end: {
          line: 20,
          column: 52,
        },
      },
      8: {
        start: {
          line: 23,
          column: 2,
        },
        end: {
          line: 23,
          column: 16,
        },
      },
      9: {
        start: {
          line: 26,
          column: 31,
        },
        end: {
          line: 43,
          column: 2,
        },
      },
      10: {
        start: {
          line: 27,
          column: 15,
        },
        end: {
          line: 33,
          column: 3,
        },
      },
      11: {
        start: {
          line: 34,
          column: 17,
        },
        end: {
          line: 40,
          column: 4,
        },
      },
      12: {
        start: {
          line: 42,
          column: 2,
        },
        end: {
          line: 42,
          column: 32,
        },
      },
      13: {
        start: {
          line: 44,
          column: 37,
        },
        end: {
          line: 61,
          column: 2,
        },
      },
      14: {
        start: {
          line: 45,
          column: 15,
        },
        end: {
          line: 51,
          column: 3,
        },
      },
      15: {
        start: {
          line: 52,
          column: 17,
        },
        end: {
          line: 58,
          column: 4,
        },
      },
      16: {
        start: {
          line: 60,
          column: 2,
        },
        end: {
          line: 60,
          column: 32,
        },
      },
      17: {
        start: {
          line: 63,
          column: 37,
        },
        end: {
          line: 72,
          column: 2,
        },
      },
      18: {
        start: {
          line: 64,
          column: 15,
        },
        end: {
          line: 66,
          column: 3,
        },
      },
      19: {
        start: {
          line: 67,
          column: 17,
        },
        end: {
          line: 69,
          column: 4,
        },
      },
      20: {
        start: {
          line: 71,
          column: 2,
        },
        end: {
          line: 71,
          column: 32,
        },
      },
      21: {
        start: {
          line: 74,
          column: 35,
        },
        end: {
          line: 85,
          column: 2,
        },
      },
      22: {
        start: {
          line: 75,
          column: 15,
        },
        end: {
          line: 78,
          column: 3,
        },
      },
      23: {
        start: {
          line: 79,
          column: 17,
        },
        end: {
          line: 82,
          column: 4,
        },
      },
      24: {
        start: {
          line: 84,
          column: 2,
        },
        end: {
          line: 84,
          column: 32,
        },
      },
      25: {
        start: {
          line: 87,
          column: 41,
        },
        end: {
          line: 98,
          column: 2,
        },
      },
      26: {
        start: {
          line: 88,
          column: 15,
        },
        end: {
          line: 91,
          column: 3,
        },
      },
      27: {
        start: {
          line: 92,
          column: 17,
        },
        end: {
          line: 95,
          column: 4,
        },
      },
      28: {
        start: {
          line: 97,
          column: 2,
        },
        end: {
          line: 97,
          column: 32,
        },
      },
      29: {
        start: {
          line: 100,
          column: 36,
        },
        end: {
          line: 109,
          column: 2,
        },
      },
      30: {
        start: {
          line: 101,
          column: 15,
        },
        end: {
          line: 103,
          column: 3,
        },
      },
      31: {
        start: {
          line: 104,
          column: 17,
        },
        end: {
          line: 106,
          column: 4,
        },
      },
      32: {
        start: {
          line: 108,
          column: 2,
        },
        end: {
          line: 108,
          column: 32,
        },
      },
      33: {
        start: {
          line: 111,
          column: 30,
        },
        end: {
          line: 142,
          column: 2,
        },
      },
      34: {
        start: {
          line: 112,
          column: 15,
        },
        end: {
          line: 125,
          column: 3,
        },
      },
      35: {
        start: {
          line: 126,
          column: 17,
        },
        end: {
          line: 139,
          column: 4,
        },
      },
      36: {
        start: {
          line: 141,
          column: 2,
        },
        end: {
          line: 141,
          column: 32,
        },
      },
      37: {
        start: {
          line: 144,
          column: 36,
        },
        end: {
          line: 175,
          column: 2,
        },
      },
      38: {
        start: {
          line: 145,
          column: 15,
        },
        end: {
          line: 158,
          column: 3,
        },
      },
      39: {
        start: {
          line: 159,
          column: 17,
        },
        end: {
          line: 172,
          column: 4,
        },
      },
      40: {
        start: {
          line: 174,
          column: 2,
        },
        end: {
          line: 174,
          column: 32,
        },
      },
      41: {
        start: {
          line: 177,
          column: 36,
        },
        end: {
          line: 194,
          column: 2,
        },
      },
      42: {
        start: {
          line: 178,
          column: 15,
        },
        end: {
          line: 184,
          column: 3,
        },
      },
      43: {
        start: {
          line: 185,
          column: 17,
        },
        end: {
          line: 191,
          column: 4,
        },
      },
      44: {
        start: {
          line: 193,
          column: 2,
        },
        end: {
          line: 193,
          column: 32,
        },
      },
      45: {
        start: {
          line: 196,
          column: 42,
        },
        end: {
          line: 213,
          column: 2,
        },
      },
      46: {
        start: {
          line: 197,
          column: 15,
        },
        end: {
          line: 203,
          column: 3,
        },
      },
      47: {
        start: {
          line: 204,
          column: 17,
        },
        end: {
          line: 210,
          column: 4,
        },
      },
      48: {
        start: {
          line: 212,
          column: 2,
        },
        end: {
          line: 212,
          column: 32,
        },
      },
    },
    fnMap: {
      0: {
        name: "validator",
        decl: {
          start: {
            line: 8,
            column: 15,
          },
          end: {
            line: 8,
            column: 24,
          },
        },
        loc: {
          start: {
            line: 8,
            column: 45,
          },
          end: {
            line: 24,
            column: 1,
          },
        },
        line: 8,
      },
      1: {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 11,
          },
          end: {
            line: 17,
            column: 12,
          },
        },
        loc: {
          start: {
            line: 17,
            column: 20,
          },
          end: {
            line: 17,
            column: 52,
          },
        },
        line: 17,
      },
      2: {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 42,
          },
          end: {
            line: 26,
            column: 43,
          },
        },
        loc: {
          start: {
            line: 26,
            column: 68,
          },
          end: {
            line: 43,
            column: 1,
          },
        },
        line: 26,
      },
      3: {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 44,
            column: 48,
          },
          end: {
            line: 44,
            column: 49,
          },
        },
        loc: {
          start: {
            line: 44,
            column: 74,
          },
          end: {
            line: 61,
            column: 1,
          },
        },
        line: 44,
      },
      4: {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 63,
            column: 48,
          },
          end: {
            line: 63,
            column: 49,
          },
        },
        loc: {
          start: {
            line: 63,
            column: 74,
          },
          end: {
            line: 72,
            column: 1,
          },
        },
        line: 63,
      },
      5: {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 74,
            column: 46,
          },
          end: {
            line: 74,
            column: 47,
          },
        },
        loc: {
          start: {
            line: 74,
            column: 72,
          },
          end: {
            line: 85,
            column: 1,
          },
        },
        line: 74,
      },
      6: {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 87,
            column: 52,
          },
          end: {
            line: 87,
            column: 53,
          },
        },
        loc: {
          start: {
            line: 87,
            column: 78,
          },
          end: {
            line: 98,
            column: 1,
          },
        },
        line: 87,
      },
      7: {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 100,
            column: 47,
          },
          end: {
            line: 100,
            column: 48,
          },
        },
        loc: {
          start: {
            line: 100,
            column: 73,
          },
          end: {
            line: 109,
            column: 1,
          },
        },
        line: 100,
      },
      8: {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 111,
            column: 41,
          },
          end: {
            line: 111,
            column: 42,
          },
        },
        loc: {
          start: {
            line: 111,
            column: 67,
          },
          end: {
            line: 142,
            column: 1,
          },
        },
        line: 111,
      },
      9: {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 144,
            column: 47,
          },
          end: {
            line: 144,
            column: 48,
          },
        },
        loc: {
          start: {
            line: 144,
            column: 73,
          },
          end: {
            line: 175,
            column: 1,
          },
        },
        line: 144,
      },
      10: {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 177,
            column: 47,
          },
          end: {
            line: 177,
            column: 48,
          },
        },
        loc: {
          start: {
            line: 177,
            column: 73,
          },
          end: {
            line: 194,
            column: 1,
          },
        },
        line: 177,
      },
      11: {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 196,
            column: 53,
          },
          end: {
            line: 196,
            column: 54,
          },
        },
        loc: {
          start: {
            line: 196,
            column: 79,
          },
          end: {
            line: 213,
            column: 1,
          },
        },
        line: 196,
      },
    },
    branchMap: {
      0: {
        loc: {
          start: {
            line: 14,
            column: 2,
          },
          end: {
            line: 21,
            column: 3,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 14,
              column: 2,
            },
            end: {
              line: 21,
              column: 3,
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
        line: 14,
      },
      1: {
        loc: {
          start: {
            line: 122,
            column: 15,
          },
          end: {
            line: 122,
            column: 78,
          },
        },
        type: "cond-expr",
        locations: [
          {
            start: {
              line: 122,
              column: 49,
            },
            end: {
              line: 122,
              column: 67,
            },
          },
          {
            start: {
              line: 122,
              column: 70,
            },
            end: {
              line: 122,
              column: 78,
            },
          },
        ],
        line: 122,
      },
      2: {
        loc: {
          start: {
            line: 182,
            column: 15,
          },
          end: {
            line: 182,
            column: 78,
          },
        },
        type: "cond-expr",
        locations: [
          {
            start: {
              line: 182,
              column: 49,
            },
            end: {
              line: 182,
              column: 67,
            },
          },
          {
            start: {
              line: 182,
              column: 70,
            },
            end: {
              line: 182,
              column: 78,
            },
          },
        ],
        line: 182,
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
    },
    f: {
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
    },
    b: {
      0: [0, 0],
      1: [0, 0],
      2: [0, 0],
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4447810820507456fc42fb27ba97ed9eceb3eb01",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1k4oazmcxn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1k4oazmcxn();
const { badRequest } = (cov_1k4oazmcxn().s[0]++, _statusCodes.default);

async function validator(schema, data, next) {
  cov_1k4oazmcxn().f[0]++;
  const validator =
    (cov_1k4oazmcxn().s[1]++,
    await schema.validate(data, {
      abortEarly: false,
    }));
  const { error } = (cov_1k4oazmcxn().s[2]++, validator);
  cov_1k4oazmcxn().s[3]++;

  if (error) {
    cov_1k4oazmcxn().b[0][0]++;
    const { details } = (cov_1k4oazmcxn().s[4]++, error);
    const messages =
      (cov_1k4oazmcxn().s[5]++,
      details
        .map((err) => {
          cov_1k4oazmcxn().f[1]++;
          cov_1k4oazmcxn().s[6]++;
          return err.message.replace(/['"]/g, "");
        })
        .join(", "));
    cov_1k4oazmcxn().s[7]++;
    return next(new _appError.default(messages, badRequest));
  } else {
    cov_1k4oazmcxn().b[0][1]++;
  }

  cov_1k4oazmcxn().s[8]++;
  return next();
}

const validateCountry =
  (cov_1k4oazmcxn().s[9]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[2]++;
    const data =
      (cov_1k4oazmcxn().s[10]++,
      {
        name: req.body.name,
        extension: req.body.extension,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        code: req.body.code,
      });
    const schema =
      (cov_1k4oazmcxn().s[11]++,
      _joi.default.object({
        name: _joi.default.string().required(),
        extension: _joi.default.string().min(2).max(2).required(),
        latitude: _joi.default.number().required(),
        longitude: _joi.default.number().required(),
        code: _joi.default.number().required(),
      }));
    cov_1k4oazmcxn().s[12]++;
    validator(schema, data, next);
  }));
exports.validateCountry = validateCountry;
const validateUpdateCountry =
  (cov_1k4oazmcxn().s[13]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[3]++;
    const data =
      (cov_1k4oazmcxn().s[14]++,
      {
        name: req.body.name,
        extension: req.body.extension,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        code: req.body.code,
      });
    const schema =
      (cov_1k4oazmcxn().s[15]++,
      _joi.default.object({
        name: _joi.default.string(),
        extension: _joi.default.string().min(2).max(2),
        latitude: _joi.default.number(),
        longitude: _joi.default.number(),
        code: _joi.default.number(),
      }));
    cov_1k4oazmcxn().s[16]++;
    validator(schema, data, next);
  }));
exports.validateUpdateCountry = validateUpdateCountry;
const validateEduPermission =
  (cov_1k4oazmcxn().s[17]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[4]++;
    const data =
      (cov_1k4oazmcxn().s[18]++,
      {
        name: req.body.name,
      });
    const schema =
      (cov_1k4oazmcxn().s[19]++,
      _joi.default.object({
        name: _joi.default.string().required(),
      }));
    cov_1k4oazmcxn().s[20]++;
    validator(schema, data, next);
  }));
exports.validateEduPermission = validateEduPermission;
const validateEduLanguage =
  (cov_1k4oazmcxn().s[21]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[5]++;
    const data =
      (cov_1k4oazmcxn().s[22]++,
      {
        name: req.body.name,
        abbreviation: req.body.abbreviation,
      });
    const schema =
      (cov_1k4oazmcxn().s[23]++,
      _joi.default.object({
        name: _joi.default.string().required(),
        abbreviation: _joi.default.string().required(),
      }));
    cov_1k4oazmcxn().s[24]++;
    validator(schema, data, next);
  }));
exports.validateEduLanguage = validateEduLanguage;
const validateUpdateEduLanguage =
  (cov_1k4oazmcxn().s[25]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[6]++;
    const data =
      (cov_1k4oazmcxn().s[26]++,
      {
        name: req.body.name,
        abbreviation: req.body.abbreviation,
      });
    const schema =
      (cov_1k4oazmcxn().s[27]++,
      _joi.default.object({
        name: _joi.default.string(),
        abbreviation: _joi.default.string(),
      }));
    cov_1k4oazmcxn().s[28]++;
    validator(schema, data, next);
  }));
exports.validateUpdateEduLanguage = validateUpdateEduLanguage;
const validateEduUserTypes =
  (cov_1k4oazmcxn().s[29]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[7]++;
    const data =
      (cov_1k4oazmcxn().s[30]++,
      {
        name: req.body.name,
      });
    const schema =
      (cov_1k4oazmcxn().s[31]++,
      _joi.default.object({
        name: _joi.default.string().required(),
      }));
    cov_1k4oazmcxn().s[32]++;
    validator(schema, data, next);
  }));
exports.validateEduUserTypes = validateEduUserTypes;
const validateSchool =
  (cov_1k4oazmcxn().s[33]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[8]++;
    const data =
      (cov_1k4oazmcxn().s[34]++,
      {
        name: req.body.name,
        abbreviation: req.body.abbreviation,
        country: req.body.country,
        city: req.body.city,
        admin: req.body.admin,
        regDate: req.body.regDate,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
        logoImage:
          process.env.NODE_ENV === "test"
            ? (cov_1k4oazmcxn().b[1][0]++, req.body.logoImage)
            : (cov_1k4oazmcxn().b[1][1]++, req.file),
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      });
    const schema =
      (cov_1k4oazmcxn().s[35]++,
      _joi.default.object({
        name: _joi.default.string().required(),
        abbreviation: _joi.default.string().required(),
        country: _joi.default.number().required(),
        city: _joi.default.string().required(),
        admin: _joi.default.number().required(),
        regDate: _joi.default.date().required(),
        email: _joi.default.string().email(),
        phoneNumber: _joi.default.number(),
        description: _joi.default.string(),
        logoImage: _joi.default.any(),
        latitude: _joi.default.string(),
        longitude: _joi.default.string(),
      }));
    cov_1k4oazmcxn().s[36]++;
    validator(schema, data, next);
  }));
exports.validateSchool = validateSchool;
const validateUpdateSchool =
  (cov_1k4oazmcxn().s[37]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[9]++;
    const data =
      (cov_1k4oazmcxn().s[38]++,
      {
        name: req.body.name,
        abbreviation: req.body.abbreviation,
        country: req.body.country,
        city: req.body.city,
        admin: req.body.admin,
        regDate: req.body.regDate,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
        logoImage: req.file,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      });
    const schema =
      (cov_1k4oazmcxn().s[39]++,
      _joi.default.object({
        name: _joi.default.string(),
        abbreviation: _joi.default.string(),
        country: _joi.default.number(),
        city: _joi.default.string(),
        admin: _joi.default.number(),
        regDate: _joi.default.date(),
        email: _joi.default.string().email(),
        phoneNumber: _joi.default.number(),
        description: _joi.default.string(),
        logoImage: _joi.default.any(),
        latitude: _joi.default.string(),
        longitude: _joi.default.string(),
      }));
    cov_1k4oazmcxn().s[40]++;
    validator(schema, data, next);
  }));
exports.validateUpdateSchool = validateUpdateSchool;
const validateEduFaculties =
  (cov_1k4oazmcxn().s[41]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[10]++;
    const data =
      (cov_1k4oazmcxn().s[42]++,
      {
        name: req.body.name,
        country: req.body.country,
        description: req.body.description,
        logoImage:
          process.env.NODE_ENV === "test"
            ? (cov_1k4oazmcxn().b[2][0]++, req.body.logoImage)
            : (cov_1k4oazmcxn().b[2][1]++, req.file),
        abbreviation: req.body.abbreviation,
      });
    const schema =
      (cov_1k4oazmcxn().s[43]++,
      _joi.default.object({
        name: _joi.default.string().required(),
        country: _joi.default.number().required(),
        description: _joi.default.string().required(),
        logoImage: _joi.default.any().required(),
        abbreviation: _joi.default.string().required(),
      }));
    cov_1k4oazmcxn().s[44]++;
    validator(schema, data, next);
  }));
exports.validateEduFaculties = validateEduFaculties;
const validateUpdateEduFaculties =
  (cov_1k4oazmcxn().s[45]++,
  (0, _catchAsync.default)(async (req, res, next) => {
    cov_1k4oazmcxn().f[11]++;
    const data =
      (cov_1k4oazmcxn().s[46]++,
      {
        name: req.body.name,
        country: req.body.country,
        description: req.body.description,
        logoImage: req.file,
        abbreviation: req.body.abbreviation,
      });
    const schema =
      (cov_1k4oazmcxn().s[47]++,
      _joi.default.object({
        name: _joi.default.string(),
        country: _joi.default.number(),
        description: _joi.default.string(),
        logoImage: _joi.default.any(),
        abbreviation: _joi.default.string(),
      }));
    cov_1k4oazmcxn().s[48]++;
    validator(schema, data, next);
  }));
exports.validateUpdateEduFaculties = validateUpdateEduFaculties;
