"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.verifyRefleshToken = exports.isEbindUserLoggedInAndVerified = void 0;

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

var _customMessages = _interopRequireDefault(require("../utils/customMessages"));

var _appError = _interopRequireDefault(require("../utils/appError"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _models = _interopRequireDefault(require("../database/models"));

var _util = require("util");

var _jsonwebtoken = require("jsonwebtoken");

var _redis = require("../config/redis.config");

function cov_2bi3fnubr5() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\authentication.js";
  var hash = "650669af04ee2812168dbcec732dc4669ef12e62";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\authentication.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 33
        },
        end: {
          line: 10,
          column: 35
        }
      },
      "1": {
        start: {
          line: 12,
          column: 25
        },
        end: {
          line: 12,
          column: 35
        }
      },
      "2": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 12
        }
      },
      "3": {
        start: {
          line: 23,
          column: 27
        },
        end: {
          line: 45,
          column: 2
        }
      },
      "4": {
        start: {
          line: 24,
          column: 14
        },
        end: {
          line: 24,
          column: 38
        }
      },
      "5": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "6": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 58
        }
      },
      "7": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 33
        }
      },
      "8": {
        start: {
          line: 32,
          column: 22
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "9": {
        start: {
          line: 37,
          column: 20
        },
        end: {
          line: 37,
          column: 70
        }
      },
      "10": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 41,
          column: 64
        }
      },
      "11": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 64
        }
      },
      "12": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 43,
          column: 39
        }
      },
      "13": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 9
        }
      },
      "14": {
        start: {
          line: 47,
          column: 34
        },
        end: {
          line: 69,
          column: 2
        }
      },
      "15": {
        start: {
          line: 48,
          column: 14
        },
        end: {
          line: 48,
          column: 28
        }
      },
      "16": {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 52,
          column: 3
        }
      },
      "17": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 65
        }
      },
      "18": {
        start: {
          line: 54,
          column: 23
        },
        end: {
          line: 57,
          column: 3
        }
      },
      "19": {
        start: {
          line: 59,
          column: 27
        },
        end: {
          line: 59,
          column: 70
        }
      },
      "20": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 62,
          column: 72
        }
      },
      "21": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 72
        }
      },
      "22": {
        start: {
          line: 64,
          column: 2
        },
        end: {
          line: 65,
          column: 65
        }
      },
      "23": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 65
        }
      },
      "24": {
        start: {
          line: 67,
          column: 2
        },
        end: {
          line: 67,
          column: 31
        }
      },
      "25": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 68,
          column: 9
        }
      },
      "26": {
        start: {
          line: 71,
          column: 46
        },
        end: {
          line: 89,
          column: 1
        }
      },
      "27": {
        start: {
          line: 73,
          column: 25
        },
        end: {
          line: 73,
          column: 47
        }
      },
      "28": {
        start: {
          line: 74,
          column: 24
        },
        end: {
          line: 76,
          column: 6
        }
      },
      "29": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 80,
          column: 5
        }
      },
      "30": {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 79,
          column: 65
        }
      },
      "31": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 84,
          column: 5
        }
      },
      "32": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 83,
          column: 66
        }
      },
      "33": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 34
        }
      },
      "34": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 87,
          column: 11
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 38
          },
          end: {
            line: 23,
            column: 39
          }
        },
        loc: {
          start: {
            line: 23,
            column: 64
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 47,
            column: 45
          },
          end: {
            line: 47,
            column: 46
          }
        },
        loc: {
          start: {
            line: 47,
            column: 71
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 47
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        },
        loc: {
          start: {
            line: 72,
            column: 28
          },
          end: {
            line: 88,
            column: 3
          }
        },
        line: 72
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
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
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 41,
            column: 64
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 41,
            column: 64
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
        line: 40
      },
      "2": {
        loc: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 52,
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
        line: 50
      },
      "3": {
        loc: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 62,
            column: 72
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 62,
            column: 72
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
        line: 61
      },
      "4": {
        loc: {
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 65,
            column: 65
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 65,
            column: 65
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
        line: 64
      },
      "5": {
        loc: {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
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
        line: 78
      },
      "6": {
        loc: {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 84,
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
        line: 82
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
      "34": 0
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
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "650669af04ee2812168dbcec732dc4669ef12e62"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2bi3fnubr5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2bi3fnubr5();
const {
  edu_admin_user_infos
} = (cov_2bi3fnubr5().s[0]++, _models.default);
const {
  unAuthorized
} = (cov_2bi3fnubr5().s[1]++, _statusCodes.default);
const {
  accountNotVerified,
  userNoLongerExist,
  refreshTokenMissing,
  refreshTokenMissingInStore,
  accessTokenInvalid,
  refreshTokenNotSame,
  tokenMissing
} = (cov_2bi3fnubr5().s[2]++, _customMessages.default);
const verifyToken = (cov_2bi3fnubr5().s[3]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_2bi3fnubr5().f[0]++;
  let token = (cov_2bi3fnubr5().s[4]++, req.get("authorization"));
  cov_2bi3fnubr5().s[5]++;

  if (!token) {
    cov_2bi3fnubr5().b[0][0]++;
    cov_2bi3fnubr5().s[6]++;
    return next(new _appError.default(tokenMissing, unAuthorized));
  } else {
    cov_2bi3fnubr5().b[0][1]++;
  }

  cov_2bi3fnubr5().s[7]++;
  token = token.split(" ").pop();
  const accessToken = (cov_2bi3fnubr5().s[8]++, await (0, _util.promisify)(_jsonwebtoken.verify)(token, process.env.JWT_ACCESS_SECRET));
  const tokenData = (cov_2bi3fnubr5().s[9]++, await (0, _redis.getToken)(`BL_${accessToken.sub.toString()}`));
  cov_2bi3fnubr5().s[10]++;

  if (tokenData === JSON.stringify({
    accessToken
  })) {
    cov_2bi3fnubr5().b[1][0]++;
    cov_2bi3fnubr5().s[11]++;
    return next(new _appError.default(accessTokenInvalid, unAuthorized));
  } else {
    cov_2bi3fnubr5().b[1][1]++;
  }

  cov_2bi3fnubr5().s[12]++;
  req.decodedAccessToken = accessToken;
  cov_2bi3fnubr5().s[13]++;
  next();
}));
exports.verifyToken = verifyToken;
const verifyRefleshToken = (cov_2bi3fnubr5().s[14]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_2bi3fnubr5().f[1]++;
  let token = (cov_2bi3fnubr5().s[15]++, req.body.token);
  cov_2bi3fnubr5().s[16]++;

  if (!token) {
    cov_2bi3fnubr5().b[2][0]++;
    cov_2bi3fnubr5().s[17]++;
    return next(new _appError.default(refreshTokenMissing, unAuthorized));
  } else {
    cov_2bi3fnubr5().b[2][1]++;
  }

  const decodedToken = (cov_2bi3fnubr5().s[18]++, await (0, _util.promisify)(_jsonwebtoken.verify)(token, process.env.JWT_REFRESH_SECRET));
  const refreshTokenData = (cov_2bi3fnubr5().s[19]++, await (0, _redis.getToken)(decodedToken.sub.toString()));
  cov_2bi3fnubr5().s[20]++;

  if (refreshTokenData === null) {
    cov_2bi3fnubr5().b[3][0]++;
    cov_2bi3fnubr5().s[21]++;
    return next(new _appError.default(refreshTokenMissingInStore, unAuthorized));
  } else {
    cov_2bi3fnubr5().b[3][1]++;
  }

  cov_2bi3fnubr5().s[22]++;

  if (JSON.parse(refreshTokenData).refreshToken !== token) {
    cov_2bi3fnubr5().b[4][0]++;
    cov_2bi3fnubr5().s[23]++;
    return next(new _appError.default(refreshTokenNotSame, unAuthorized));
  } else {
    cov_2bi3fnubr5().b[4][1]++;
  }

  cov_2bi3fnubr5().s[24]++;
  req.foundUser = decodedToken;
  cov_2bi3fnubr5().s[25]++;
  next();
}));
exports.verifyRefleshToken = verifyRefleshToken;
const isEbindUserLoggedInAndVerified = (cov_2bi3fnubr5().s[26]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_2bi3fnubr5().f[2]++;
  const decodedToken = (cov_2bi3fnubr5().s[27]++, req.decodedAccessToken);
  const currentUser = (cov_2bi3fnubr5().s[28]++, await edu_admin_user_infos.findOne({
    where: decodedToken.id
  }));
  cov_2bi3fnubr5().s[29]++;

  if (!currentUser) {
    cov_2bi3fnubr5().b[5][0]++;
    cov_2bi3fnubr5().s[30]++;
    return next(new _appError.default(userNoLongerExist, unAuthorized));
  } else {
    cov_2bi3fnubr5().b[5][1]++;
  }

  cov_2bi3fnubr5().s[31]++;

  if (!currentUser.isVerified) {
    cov_2bi3fnubr5().b[6][0]++;
    cov_2bi3fnubr5().s[32]++;
    return next(new _appError.default(accountNotVerified, unAuthorized));
  } else {
    cov_2bi3fnubr5().b[6][1]++;
  }

  cov_2bi3fnubr5().s[33]++;
  req.currentUser = currentUser;
  cov_2bi3fnubr5().s[34]++;
  next();
}));
exports.isEbindUserLoggedInAndVerified = isEbindUserLoggedInAndVerified;