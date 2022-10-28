"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _redis = require("../config/redis.config");

function cov_v49hyda2r() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\authentication.js";
  var hash = "b1e90c99a4c201dea19a6e532864102cb7336d86";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\authentication.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 29
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 10,
          column: 5
        }
      },
      "2": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 68
        }
      },
      "3": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 24
        }
      },
      "4": {
        start: {
          line: 17,
          column: 22
        },
        end: {
          line: 19,
          column: 4
        }
      },
      "5": {
        start: {
          line: 20,
          column: 23
        },
        end: {
          line: 20,
          column: 53
        }
      },
      "6": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 29
          },
          end: {
            line: 4,
            column: 30
          }
        },
        loc: {
          start: {
            line: 4,
            column: 43
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "GenerateRefreshToken",
        decl: {
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 5,
            column: 37
          }
        },
        loc: {
          start: {
            line: 5,
            column: 42
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 5
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b1e90c99a4c201dea19a6e532864102cb7336d86"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_v49hyda2r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_v49hyda2r();
cov_v49hyda2r().s[0]++;

const generateToken = async id => {
  cov_v49hyda2r().f[0]++;

  async function GenerateRefreshToken(id) {
    cov_v49hyda2r().f[1]++;
    const refreshToken = (cov_v49hyda2r().s[1]++, _jsonwebtoken.default.sign({
      sub: id
    }, process.env.JWT_REFRESH_SECRET, {}));
    cov_v49hyda2r().s[2]++;
    await (0, _redis.setToken)(id.toString(), JSON.stringify({
      refreshToken
    }));
    cov_v49hyda2r().s[3]++;
    return refreshToken;
  }

  const accessToken = (cov_v49hyda2r().s[4]++, _jsonwebtoken.default.sign({
    sub: id
  }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_TIME
  }));
  const refreshToken = (cov_v49hyda2r().s[5]++, await GenerateRefreshToken(id));
  cov_v49hyda2r().s[6]++;
  return {
    accessToken,
    refreshToken
  };
};

exports.generateToken = generateToken;