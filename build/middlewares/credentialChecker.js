"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyCredentials = exports.loginDataExistOnByOne = exports.bothEmailAndPasswordExist = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

var _customMessages = _interopRequireDefault(require("../utils/customMessages"));

var _appError = _interopRequireDefault(require("../utils/appError"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _models = _interopRequireDefault(require("../database/models"));

var _user = require("../services/user.service");

function cov_23s0r57cfu() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\credentialChecker.js";
  var hash = "85d4b931ea2025ca550646aa793ae73e26ada165";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\middlewares\\credentialChecker.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 49
        },
        end: {
          line: 9,
          column: 51
        }
      },
      "1": {
        start: {
          line: 11,
          column: 37
        },
        end: {
          line: 11,
          column: 47
        }
      },
      "2": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 12
        }
      },
      "3": {
        start: {
          line: 21,
          column: 41
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "4": {
        start: {
          line: 22,
          column: 40
        },
        end: {
          line: 22,
          column: 48
        }
      },
      "5": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "6": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 11
        }
      },
      "7": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 73
        }
      },
      "8": {
        start: {
          line: 30,
          column: 37
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "9": {
        start: {
          line: 31,
          column: 40
        },
        end: {
          line: 31,
          column: 48
        }
      },
      "10": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 37,
          column: 3
        }
      },
      "11": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "12": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 20
        }
      },
      "13": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 62
        }
      },
      "14": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 67
        }
      },
      "15": {
        start: {
          line: 41,
          column: 33
        },
        end: {
          line: 108,
          column: 2
        }
      },
      "16": {
        start: {
          line: 42,
          column: 40
        },
        end: {
          line: 42,
          column: 48
        }
      },
      "17": {
        start: {
          line: 44,
          column: 21
        },
        end: {
          line: 76,
          column: 4
        }
      },
      "18": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 83,
          column: 6
        }
      },
      "19": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 83,
          column: 6
        }
      },
      "20": {
        start: {
          line: 85,
          column: 25
        },
        end: {
          line: 85,
          column: 35
        }
      },
      "21": {
        start: {
          line: 86,
          column: 25
        },
        end: {
          line: 86,
          column: 44
        }
      },
      "22": {
        start: {
          line: 88,
          column: 2
        },
        end: {
          line: 107,
          column: 3
        }
      },
      "23": {
        start: {
          line: 89,
          column: 21
        },
        end: {
          line: 92,
          column: 5
        }
      },
      "24": {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 94,
          column: 35
        }
      },
      "25": {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 95,
          column: 36
        }
      },
      "26": {
        start: {
          line: 97,
          column: 4
        },
        end: {
          line: 97,
          column: 31
        }
      },
      "27": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 11
        }
      },
      "28": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 106,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 61
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 30,
            column: 37
          },
          end: {
            line: 30,
            column: 38
          }
        },
        loc: {
          start: {
            line: 30,
            column: 57
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 30
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 41,
            column: 44
          },
          end: {
            line: 41,
            column: 45
          }
        },
        loc: {
          start: {
            line: 41,
            column: 70
          },
          end: {
            line: 108,
            column: 1
          }
        },
        line: 41
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }, {
          start: {
            line: 25,
            column: 9
          },
          end: {
            line: 27,
            column: 3
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 23,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 23,
            column: 11
          }
        }, {
          start: {
            line: 23,
            column: 15
          },
          end: {
            line: 23,
            column: 23
          }
        }, {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 35
          }
        }],
        line: 23
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 37,
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
        line: 32
      },
      "3": {
        loc: {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 32,
            column: 23
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 32,
            column: 11
          }
        }, {
          start: {
            line: 32,
            column: 15
          },
          end: {
            line: 32,
            column: 23
          }
        }],
        line: 32
      },
      "4": {
        loc: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
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
        line: 33
      },
      "5": {
        loc: {
          start: {
            line: 45,
            column: 11
          },
          end: {
            line: 45,
            column: 56
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 45,
            column: 22
          },
          end: {
            line: 45,
            column: 44
          }
        }, {
          start: {
            line: 45,
            column: 47
          },
          end: {
            line: 45,
            column: 56
          }
        }],
        line: 45
      },
      "6": {
        loc: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 83,
            column: 6
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 83,
            column: 6
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
        line: 77
      },
      "7": {
        loc: {
          start: {
            line: 80,
            column: 8
          },
          end: {
            line: 80,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 80,
            column: 19
          },
          end: {
            line: 80,
            column: 44
          }
        }, {
          start: {
            line: 80,
            column: 47
          },
          end: {
            line: 80,
            column: 69
          }
        }],
        line: 80
      },
      "8": {
        loc: {
          start: {
            line: 88,
            column: 2
          },
          end: {
            line: 107,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 2
          },
          end: {
            line: 107,
            column: 3
          }
        }, {
          start: {
            line: 100,
            column: 9
          },
          end: {
            line: 107,
            column: 3
          }
        }],
        line: 88
      },
      "9": {
        loc: {
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 103,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 103,
            column: 19
          },
          end: {
            line: 103,
            column: 44
          }
        }, {
          start: {
            line: 103,
            column: 47
          },
          end: {
            line: 103,
            column: 69
          }
        }],
        line: 103
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
      "28": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "85d4b931ea2025ca550646aa793ae73e26ada165"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23s0r57cfu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_23s0r57cfu();
const {
  edu_users,
  edu_user_types,
  countries
} = (cov_23s0r57cfu().s[0]++, _models.default);
const {
  badRequest,
  unAuthorized
} = (cov_23s0r57cfu().s[1]++, _statusCodes.default);
const {
  loginPasswordAndEmailOrUsernameEmpty,
  loginPasswordEmpty,
  loginEmailOrUsernameEmpty,
  loginUsernameUnauthorized,
  loginEmailUnauthorized
} = (cov_23s0r57cfu().s[2]++, _customMessages.default);
cov_23s0r57cfu().s[3]++;

const bothEmailAndPasswordExist = (req, res, next) => {
  cov_23s0r57cfu().f[0]++;
  const {
    email,
    password,
    username
  } = (cov_23s0r57cfu().s[4]++, req.body);
  cov_23s0r57cfu().s[5]++;

  if ((cov_23s0r57cfu().b[1][0]++, email) || (cov_23s0r57cfu().b[1][1]++, password) || (cov_23s0r57cfu().b[1][2]++, username)) {
    cov_23s0r57cfu().b[0][0]++;
    cov_23s0r57cfu().s[6]++;
    next();
  } else {
    cov_23s0r57cfu().b[0][1]++;
    cov_23s0r57cfu().s[7]++;
    next(new _appError.default(loginPasswordAndEmailOrUsernameEmpty, badRequest));
  }
};

exports.bothEmailAndPasswordExist = bothEmailAndPasswordExist;
cov_23s0r57cfu().s[8]++;

const loginDataExistOnByOne = (req, res, next) => {
  cov_23s0r57cfu().f[1]++;
  const {
    email,
    password,
    username
  } = (cov_23s0r57cfu().s[9]++, req.body);
  cov_23s0r57cfu().s[10]++;

  if ((cov_23s0r57cfu().b[3][0]++, email) || (cov_23s0r57cfu().b[3][1]++, username)) {
    cov_23s0r57cfu().b[2][0]++;
    cov_23s0r57cfu().s[11]++;

    if (password) {
      cov_23s0r57cfu().b[4][0]++;
      cov_23s0r57cfu().s[12]++;
      return next();
    } else {
      cov_23s0r57cfu().b[4][1]++;
    }

    cov_23s0r57cfu().s[13]++;
    return next(new _appError.default(loginPasswordEmpty, badRequest));
  } else {
    cov_23s0r57cfu().b[2][1]++;
  }

  cov_23s0r57cfu().s[14]++;
  return next(new _appError.default(loginEmailOrUsernameEmpty, badRequest));
};

exports.loginDataExistOnByOne = loginDataExistOnByOne;
const verifyCredentials = (cov_23s0r57cfu().s[15]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_23s0r57cfu().f[2]++;
  const {
    email,
    password,
    username
  } = (cov_23s0r57cfu().s[16]++, req.body);
  const gottenUser = (cov_23s0r57cfu().s[17]++, await edu_users.findOne({
    where: username ? (cov_23s0r57cfu().b[5][0]++, {
      userName: username
    }) : (cov_23s0r57cfu().b[5][1]++, {
      email
    }),
    include: [{
      model: countries,
      as: "communityCountry",
      attributes: {
        exclude: ["createdAt", "updatedAt", "active"]
      }
    }, {
      model: edu_user_types,
      as: "userType",
      attributes: {
        exclude: ["createdAt", "updatedAt", "active"]
      }
    }],
    attributes: {
      exclude: ["userTypeId", "communityCountryId", "passwordChangedAt", "passwordResetToken", "passwordResetExpires", "twoFA", "fixedNavBar", "darkMode", "miniSidenav", "sidenavColor", "sidenavType", "active", "updatedAt", "createdAt"]
    }
  }));
  cov_23s0r57cfu().s[18]++;

  if (!gottenUser) {
    cov_23s0r57cfu().b[6][0]++;
    cov_23s0r57cfu().s[19]++;
    return next(new _appError.default(username ? (cov_23s0r57cfu().b[7][0]++, loginUsernameUnauthorized) : (cov_23s0r57cfu().b[7][1]++, loginEmailUnauthorized), unAuthorized));
  } else {
    cov_23s0r57cfu().b[6][1]++;
  }

  const {
    dataValues
  } = (cov_23s0r57cfu().s[20]++, gottenUser);
  const passwordFromDb = (cov_23s0r57cfu().s[21]++, dataValues.password);
  cov_23s0r57cfu().s[22]++;

  if (await _bcryptjs.default.compare(password, passwordFromDb)) {
    cov_23s0r57cfu().b[8][0]++;
    const moreInfo = (cov_23s0r57cfu().s[23]++, await (0, _user.userExtraInfo)(dataValues.userType.name, dataValues.id));
    cov_23s0r57cfu().s[24]++;
    dataValues.moreInfo = moreInfo;
    cov_23s0r57cfu().s[25]++;
    dataValues.password = undefined;
    cov_23s0r57cfu().s[26]++;
    req.foundUser = dataValues;
    cov_23s0r57cfu().s[27]++;
    next();
  } else {
    cov_23s0r57cfu().b[8][1]++;
    cov_23s0r57cfu().s[28]++;
    next(new _appError.default(username ? (cov_23s0r57cfu().b[9][0]++, loginUsernameUnauthorized) : (cov_23s0r57cfu().b[9][1]++, loginEmailUnauthorized), unAuthorized));
  }
}));
exports.verifyCredentials = verifyCredentials;