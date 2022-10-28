"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userExtraInfo = void 0;

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _systemUserTypes = _interopRequireDefault(require("../utils/systemUserTypes"));

var _models = _interopRequireDefault(require("../database/models"));

function cov_n203ewlpj() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\services\\user.service.js";
  var hash = "ecb5cf72c6b5618d28a3d7ba61d03f1a1d9f2ef5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\services\\user.service.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 76
        },
        end: {
          line: 5,
          column: 78
        }
      },
      "1": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 17
        }
      },
      "2": {
        start: {
          line: 10,
          column: 29
        },
        end: {
          line: 70,
          column: 1
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 69,
          column: 4
        }
      },
      "4": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 66,
          column: 7
        }
      },
      "5": {
        start: {
          line: 17,
          column: 10
        },
        end: {
          line: 27,
          column: 13
        }
      },
      "6": {
        start: {
          line: 28,
          column: 10
        },
        end: {
          line: 28,
          column: 45
        }
      },
      "7": {
        start: {
          line: 29,
          column: 10
        },
        end: {
          line: 29,
          column: 16
        }
      },
      "8": {
        start: {
          line: 32,
          column: 10
        },
        end: {
          line: 37,
          column: 13
        }
      },
      "9": {
        start: {
          line: 39,
          column: 10
        },
        end: {
          line: 39,
          column: 45
        }
      },
      "10": {
        start: {
          line: 40,
          column: 10
        },
        end: {
          line: 40,
          column: 16
        }
      },
      "11": {
        start: {
          line: 43,
          column: 10
        },
        end: {
          line: 48,
          column: 13
        }
      },
      "12": {
        start: {
          line: 50,
          column: 10
        },
        end: {
          line: 50,
          column: 45
        }
      },
      "13": {
        start: {
          line: 51,
          column: 10
        },
        end: {
          line: 51,
          column: 16
        }
      },
      "14": {
        start: {
          line: 54,
          column: 10
        },
        end: {
          line: 59,
          column: 13
        }
      },
      "15": {
        start: {
          line: 61,
          column: 10
        },
        end: {
          line: 61,
          column: 45
        }
      },
      "16": {
        start: {
          line: 62,
          column: 10
        },
        end: {
          line: 62,
          column: 16
        }
      },
      "17": {
        start: {
          line: 65,
          column: 10
        },
        end: {
          line: 65,
          column: 16
        }
      },
      "18": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 29
          },
          end: {
            line: 10,
            column: 30
          }
        },
        loc: {
          start: {
            line: 10,
            column: 47
          },
          end: {
            line: 70,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 15
          },
          end: {
            line: 12,
            column: 16
          }
        },
        loc: {
          start: {
            line: 12,
            column: 34
          },
          end: {
            line: 68,
            column: 5
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 6
          },
          end: {
            line: 66,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 29,
            column: 16
          }
        }, {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 40,
            column: 16
          }
        }, {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 51,
            column: 16
          }
        }, {
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 62,
            column: 16
          }
        }, {
          start: {
            line: 64,
            column: 8
          },
          end: {
            line: 65,
            column: 16
          }
        }],
        line: 15
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
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ecb5cf72c6b5618d28a3d7ba61d03f1a1d9f2ef5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_n203ewlpj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_n203ewlpj();
const {
  edu_admin_user_infos,
  student_infos,
  s_user_infos,
  c_user_infos
} = (cov_n203ewlpj().s[0]++, _models.default);
const {
  educationBindUser,
  studentUser,
  communityUser,
  schoolUser
} = (cov_n203ewlpj().s[1]++, _systemUserTypes.default);
cov_n203ewlpj().s[2]++;

const userExtraInfo = (name, userId) => {
  cov_n203ewlpj().f[0]++;
  cov_n203ewlpj().s[3]++;
  return new Promise((0, _catchAsync.default)(async resolve => {
    cov_n203ewlpj().f[1]++;
    let gottenUser;
    cov_n203ewlpj().s[4]++;

    switch (name) {
      case educationBindUser:
        cov_n203ewlpj().b[0][0]++;
        cov_n203ewlpj().s[5]++;
        gottenUser = await edu_admin_user_infos.findOne({
          where: {
            userId
          },
          attributes: {
            exclude: ["userId", "verificationToken", "updatedAt", "createdAt"]
          }
        });
        cov_n203ewlpj().s[6]++;
        gottenUser = gottenUser.dataValues;
        cov_n203ewlpj().s[7]++;
        break;

      case studentUser:
        cov_n203ewlpj().b[0][1]++;
        cov_n203ewlpj().s[8]++;
        gottenUser = await student_infos.findOne({
          where: {
            userId
          },
          attributes: {
            exclude: ["userId", "updatedAt", "createdAt"]
          }
        });
        cov_n203ewlpj().s[9]++;
        gottenUser = gottenUser.dataValues;
        cov_n203ewlpj().s[10]++;
        break;

      case communityUser:
        cov_n203ewlpj().b[0][2]++;
        cov_n203ewlpj().s[11]++;
        gottenUser = await c_user_infos.findOne({
          where: {
            userId
          },
          attributes: {
            exclude: ["userId", "updatedAt", "createdAt"]
          }
        });
        cov_n203ewlpj().s[12]++;
        gottenUser = gottenUser.dataValues;
        cov_n203ewlpj().s[13]++;
        break;

      case schoolUser:
        cov_n203ewlpj().b[0][3]++;
        cov_n203ewlpj().s[14]++;
        gottenUser = await s_user_infos.findOne({
          where: {
            userId
          },
          attributes: {
            exclude: ["userId", "updatedAt", "createdAt"]
          }
        });
        cov_n203ewlpj().s[15]++;
        gottenUser = gottenUser.dataValues;
        cov_n203ewlpj().s[16]++;
        break;

      default:
        cov_n203ewlpj().b[0][4]++;
        cov_n203ewlpj().s[17]++;
        break;
    }

    cov_n203ewlpj().s[18]++;
    return resolve(gottenUser);
  }));
};

exports.userExtraInfo = userExtraInfo;