"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccessToken = exports.eduUserLogout = exports.eduUserLogin = void 0;

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _responseHandlers = require("../utils/responseHandlers");

var _authentication = require("../utils/authentication");

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

var _customMessages = _interopRequireDefault(require("../utils/customMessages"));

var _redis = require("../config/redis.config");

function cov_16rwmpev4x() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\authentication.controller.js";
  var hash = "1f34a7e8f9bf9d69928f746bbf7a6f76fe6a8559";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\authentication.controller.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 26
        },
        end: {
          line: 8,
          column: 34
        }
      },
      "1": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 25
        }
      },
      "2": {
        start: {
          line: 11,
          column: 28
        },
        end: {
          line: 19,
          column: 2
        }
      },
      "3": {
        start: {
          line: 12,
          column: 24
        },
        end: {
          line: 12,
          column: 27
        }
      },
      "4": {
        start: {
          line: 13,
          column: 17
        },
        end: {
          line: 13,
          column: 50
        }
      },
      "5": {
        start: {
          line: 14,
          column: 15
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "6": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 33
        }
      },
      "7": {
        start: {
          line: 21,
          column: 30
        },
        end: {
          line: 26,
          column: 2
        }
      },
      "8": {
        start: {
          line: 22,
          column: 24
        },
        end: {
          line: 22,
          column: 27
        }
      },
      "9": {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 23,
          column: 51
        }
      },
      "10": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 35
        }
      },
      "11": {
        start: {
          line: 28,
          column: 29
        },
        end: {
          line: 37,
          column: 2
        }
      },
      "12": {
        start: {
          line: 29,
          column: 21
        },
        end: {
          line: 29,
          column: 36
        }
      },
      "13": {
        start: {
          line: 30,
          column: 22
        },
        end: {
          line: 30,
          column: 44
        }
      },
      "14": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 39
        }
      },
      "15": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 77
        }
      },
      "16": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 39
          },
          end: {
            line: 11,
            column: 40
          }
        },
        loc: {
          start: {
            line: 11,
            column: 65
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 41
          },
          end: {
            line: 21,
            column: 42
          }
        },
        loc: {
          start: {
            line: 21,
            column: 67
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 28,
            column: 40
          },
          end: {
            line: 28,
            column: 41
          }
        },
        loc: {
          start: {
            line: 28,
            column: 66
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 28
      }
    },
    branchMap: {},
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
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1f34a7e8f9bf9d69928f746bbf7a6f76fe6a8559"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16rwmpev4x = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_16rwmpev4x();
const {
  logoutMessage
} = (cov_16rwmpev4x().s[0]++, _customMessages.default);
const {
  ok
} = (cov_16rwmpev4x().s[1]++, _statusCodes.default);
const eduUserLogin = (cov_16rwmpev4x().s[2]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_16rwmpev4x().f[0]++;
  const {
    foundUser
  } = (cov_16rwmpev4x().s[3]++, req);
  const tokens = (cov_16rwmpev4x().s[4]++, await (0, _authentication.generateToken)(foundUser.id));
  const data = (cov_16rwmpev4x().s[5]++, {
    tokens,
    user: foundUser
  });
  cov_16rwmpev4x().s[6]++;
  (0, _responseHandlers.successResponse)(res, ok, data);
}));
exports.eduUserLogin = eduUserLogin;
const getAccessToken = (cov_16rwmpev4x().s[7]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_16rwmpev4x().f[1]++;
  const {
    foundUser
  } = (cov_16rwmpev4x().s[8]++, req);
  const tokens = (cov_16rwmpev4x().s[9]++, await (0, _authentication.generateToken)(foundUser.sub));
  cov_16rwmpev4x().s[10]++;
  (0, _responseHandlers.successResponse)(res, ok, tokens);
}));
exports.getAccessToken = getAccessToken;
const eduUserLogout = (cov_16rwmpev4x().s[11]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_16rwmpev4x().f[2]++;
  const {
    userId
  } = (cov_16rwmpev4x().s[12]++, req.currentUser);
  const accessToken = (cov_16rwmpev4x().s[13]++, req.decodedAccessToken);
  cov_16rwmpev4x().s[14]++;
  await (0, _redis.deleteToken)(userId.toString());
  cov_16rwmpev4x().s[15]++;
  await (0, _redis.setToken)(`BL_${userId.toString()}`, JSON.stringify({
    accessToken
  }));
  cov_16rwmpev4x().s[16]++;
  return (0, _responseHandlers.deleteResponse)(res, logoutMessage);
}));
exports.eduUserLogout = eduUserLogout;