"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUpdateEduLanguage = exports.validateUpdateCountry = exports.validateEduUserTypes = exports.validateEduPermission = exports.validateEduLanguage = exports.validateCountry = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _appError = _interopRequireDefault(require("./appError"));

var _catchAsync = _interopRequireDefault(require("./catchAsync"));

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_1k4oazmcxn() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\validations.js";
  var hash = "3db1952eb70607e015ea5fe8b997a739dcd25b2d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\validations.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 6,
          column: 33
        }
      },
      "1": {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 11,
          column: 4
        }
      },
      "2": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 29
        }
      },
      "3": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "4": {
        start: {
          line: 15,
          column: 24
        },
        end: {
          line: 15,
          column: 29
        }
      },
      "5": {
        start: {
          line: 16,
          column: 21
        },
        end: {
          line: 18,
          column: 17
        }
      },
      "6": {
        start: {
          line: 17,
          column: 20
        },
        end: {
          line: 17,
          column: 52
        }
      },
      "7": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 52
        }
      },
      "8": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 16
        }
      },
      "9": {
        start: {
          line: 26,
          column: 31
        },
        end: {
          line: 44,
          column: 2
        }
      },
      "10": {
        start: {
          line: 27,
          column: 15
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "11": {
        start: {
          line: 34,
          column: 17
        },
        end: {
          line: 40,
          column: 4
        }
      },
      "12": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 31
        }
      },
      "13": {
        start: {
          line: 45,
          column: 37
        },
        end: {
          line: 62,
          column: 2
        }
      },
      "14": {
        start: {
          line: 46,
          column: 15
        },
        end: {
          line: 52,
          column: 3
        }
      },
      "15": {
        start: {
          line: 53,
          column: 17
        },
        end: {
          line: 59,
          column: 4
        }
      },
      "16": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 61,
          column: 31
        }
      },
      "17": {
        start: {
          line: 64,
          column: 37
        },
        end: {
          line: 73,
          column: 2
        }
      },
      "18": {
        start: {
          line: 65,
          column: 15
        },
        end: {
          line: 67,
          column: 3
        }
      },
      "19": {
        start: {
          line: 68,
          column: 17
        },
        end: {
          line: 70,
          column: 4
        }
      },
      "20": {
        start: {
          line: 72,
          column: 2
        },
        end: {
          line: 72,
          column: 31
        }
      },
      "21": {
        start: {
          line: 75,
          column: 35
        },
        end: {
          line: 86,
          column: 2
        }
      },
      "22": {
        start: {
          line: 76,
          column: 15
        },
        end: {
          line: 79,
          column: 3
        }
      },
      "23": {
        start: {
          line: 80,
          column: 17
        },
        end: {
          line: 83,
          column: 4
        }
      },
      "24": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 85,
          column: 31
        }
      },
      "25": {
        start: {
          line: 88,
          column: 41
        },
        end: {
          line: 99,
          column: 2
        }
      },
      "26": {
        start: {
          line: 89,
          column: 15
        },
        end: {
          line: 92,
          column: 3
        }
      },
      "27": {
        start: {
          line: 93,
          column: 17
        },
        end: {
          line: 96,
          column: 4
        }
      },
      "28": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 98,
          column: 31
        }
      },
      "29": {
        start: {
          line: 101,
          column: 36
        },
        end: {
          line: 110,
          column: 2
        }
      },
      "30": {
        start: {
          line: 102,
          column: 15
        },
        end: {
          line: 104,
          column: 3
        }
      },
      "31": {
        start: {
          line: 105,
          column: 17
        },
        end: {
          line: 107,
          column: 4
        }
      },
      "32": {
        start: {
          line: 109,
          column: 2
        },
        end: {
          line: 109,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "validator",
        decl: {
          start: {
            line: 8,
            column: 15
          },
          end: {
            line: 8,
            column: 24
          }
        },
        loc: {
          start: {
            line: 8,
            column: 45
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 11
          },
          end: {
            line: 17,
            column: 12
          }
        },
        loc: {
          start: {
            line: 17,
            column: 20
          },
          end: {
            line: 17,
            column: 52
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 42
          },
          end: {
            line: 26,
            column: 43
          }
        },
        loc: {
          start: {
            line: 26,
            column: 68
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 26
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 45,
            column: 48
          },
          end: {
            line: 45,
            column: 49
          }
        },
        loc: {
          start: {
            line: 45,
            column: 74
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 45
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 64,
            column: 48
          },
          end: {
            line: 64,
            column: 49
          }
        },
        loc: {
          start: {
            line: 64,
            column: 74
          },
          end: {
            line: 73,
            column: 1
          }
        },
        line: 64
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 75,
            column: 46
          },
          end: {
            line: 75,
            column: 47
          }
        },
        loc: {
          start: {
            line: 75,
            column: 72
          },
          end: {
            line: 86,
            column: 1
          }
        },
        line: 75
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 88,
            column: 52
          },
          end: {
            line: 88,
            column: 53
          }
        },
        loc: {
          start: {
            line: 88,
            column: 78
          },
          end: {
            line: 99,
            column: 1
          }
        },
        line: 88
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 101,
            column: 47
          },
          end: {
            line: 101,
            column: 48
          }
        },
        loc: {
          start: {
            line: 101,
            column: 73
          },
          end: {
            line: 110,
            column: 1
          }
        },
        line: 101
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 21,
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
        line: 14
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
      "32": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3db1952eb70607e015ea5fe8b997a739dcd25b2d"
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
const {
  badRequest
} = (cov_1k4oazmcxn().s[0]++, _statusCodes.default);

async function validator(schema, data, next) {
  cov_1k4oazmcxn().f[0]++;
  const validator = (cov_1k4oazmcxn().s[1]++, await schema.validate(data, {
    abortEarly: false
  }));
  const {
    error
  } = (cov_1k4oazmcxn().s[2]++, validator);
  cov_1k4oazmcxn().s[3]++;

  if (error) {
    cov_1k4oazmcxn().b[0][0]++;
    const {
      details
    } = (cov_1k4oazmcxn().s[4]++, error);
    const messages = (cov_1k4oazmcxn().s[5]++, details.map(err => {
      cov_1k4oazmcxn().f[1]++;
      cov_1k4oazmcxn().s[6]++;
      return err.message.replace(/['"]/g, "");
    }).join(", "));
    cov_1k4oazmcxn().s[7]++;
    return next(new _appError.default(messages, badRequest));
  } else {
    cov_1k4oazmcxn().b[0][1]++;
  }

  cov_1k4oazmcxn().s[8]++;
  return next();
}

const validateCountry = (cov_1k4oazmcxn().s[9]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_1k4oazmcxn().f[2]++;
  const data = (cov_1k4oazmcxn().s[10]++, {
    name: req.body.name,
    extension: req.body.extension,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    code: req.body.code
  });
  const schema = (cov_1k4oazmcxn().s[11]++, _joi.default.object({
    name: _joi.default.string().required(),
    extension: _joi.default.string().min(2).max(2).required(),
    latitude: _joi.default.number().required(),
    longitude: _joi.default.number().required(),
    code: _joi.default.number().required()
  }));
  cov_1k4oazmcxn().s[12]++;
  validator(schema, data, next);
}));
exports.validateCountry = validateCountry;
const validateUpdateCountry = (cov_1k4oazmcxn().s[13]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_1k4oazmcxn().f[3]++;
  const data = (cov_1k4oazmcxn().s[14]++, {
    name: req.body.name,
    extension: req.body.extension,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    code: req.body.code
  });
  const schema = (cov_1k4oazmcxn().s[15]++, _joi.default.object({
    name: _joi.default.string(),
    extension: _joi.default.string().min(2).max(2),
    latitude: _joi.default.number(),
    longitude: _joi.default.number(),
    code: _joi.default.number()
  }));
  cov_1k4oazmcxn().s[16]++;
  validator(schema, data, next);
}));
exports.validateUpdateCountry = validateUpdateCountry;
const validateEduPermission = (cov_1k4oazmcxn().s[17]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_1k4oazmcxn().f[4]++;
  const data = (cov_1k4oazmcxn().s[18]++, {
    name: req.body.name
  });
  const schema = (cov_1k4oazmcxn().s[19]++, _joi.default.object({
    name: _joi.default.string().required()
  }));
  cov_1k4oazmcxn().s[20]++;
  validator(schema, data, next);
}));
exports.validateEduPermission = validateEduPermission;
const validateEduLanguage = (cov_1k4oazmcxn().s[21]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_1k4oazmcxn().f[5]++;
  const data = (cov_1k4oazmcxn().s[22]++, {
    name: req.body.name,
    abbreviation: req.body.abbreviation
  });
  const schema = (cov_1k4oazmcxn().s[23]++, _joi.default.object({
    name: _joi.default.string().required(),
    abbreviation: _joi.default.string().required()
  }));
  cov_1k4oazmcxn().s[24]++;
  validator(schema, data, next);
}));
exports.validateEduLanguage = validateEduLanguage;
const validateUpdateEduLanguage = (cov_1k4oazmcxn().s[25]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_1k4oazmcxn().f[6]++;
  const data = (cov_1k4oazmcxn().s[26]++, {
    name: req.body.name,
    abbreviation: req.body.abbreviation
  });
  const schema = (cov_1k4oazmcxn().s[27]++, _joi.default.object({
    name: _joi.default.string(),
    abbreviation: _joi.default.string()
  }));
  cov_1k4oazmcxn().s[28]++;
  validator(schema, data, next);
}));
exports.validateUpdateEduLanguage = validateUpdateEduLanguage;
const validateEduUserTypes = (cov_1k4oazmcxn().s[29]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_1k4oazmcxn().f[7]++;
  const data = (cov_1k4oazmcxn().s[30]++, {
    name: req.body.name
  });
  const schema = (cov_1k4oazmcxn().s[31]++, _joi.default.object({
    name: _joi.default.string().required()
  }));
  cov_1k4oazmcxn().s[32]++;
  validator(schema, data, next);
}));
exports.validateEduUserTypes = validateEduUserTypes;