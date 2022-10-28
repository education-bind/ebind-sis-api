"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setToken = exports.getToken = exports.deleteToken = exports.default = void 0;

var _redis = require("redis");

var _logger = _interopRequireDefault(require("../utils/logger"));

function cov_48dncu3ke() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\config\\redis.config.js";
  var hash = "7ade822ddad6df6c184ad0f2e77df1e31428e347";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\config\\redis.config.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 33
        },
        end: {
          line: 4,
          column: 44
        }
      },
      "1": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 9,
          column: 2
        }
      },
      "2": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 43
        }
      },
      "4": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "5": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 63
        }
      },
      "6": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "7": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 41
        }
      },
      "8": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "9": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 16
        }
      },
      "10": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 26
        }
      },
      "11": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "12": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 30
        }
      },
      "13": {
        start: {
          line: 32,
          column: 24
        },
        end: {
          line: 32,
          column: 79
        }
      },
      "14": {
        start: {
          line: 32,
          column: 46
        },
        end: {
          line: 32,
          column: 79
        }
      },
      "15": {
        start: {
          line: 33,
          column: 27
        },
        end: {
          line: 33,
          column: 68
        }
      },
      "16": {
        start: {
          line: 33,
          column: 42
        },
        end: {
          line: 33,
          column: 68
        }
      },
      "17": {
        start: {
          line: 34,
          column: 24
        },
        end: {
          line: 34,
          column: 65
        }
      },
      "18": {
        start: {
          line: 34,
          column: 39
        },
        end: {
          line: 34,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 26
          },
          end: {
            line: 11,
            column: 27
          }
        },
        loc: {
          start: {
            line: 11,
            column: 32
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 15,
            column: 25
          }
        },
        loc: {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 24
          },
          end: {
            line: 19,
            column: 25
          }
        },
        loc: {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 23,
            column: 22
          },
          end: {
            line: 23,
            column: 23
          }
        },
        loc: {
          start: {
            line: 23,
            column: 31
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 23
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 28,
            column: 1
          },
          end: {
            line: 28,
            column: 2
          }
        },
        loc: {
          start: {
            line: 28,
            column: 13
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 28
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 32,
            column: 24
          },
          end: {
            line: 32,
            column: 25
          }
        },
        loc: {
          start: {
            line: 32,
            column: 46
          },
          end: {
            line: 32,
            column: 79
          }
        },
        line: 32
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 33,
            column: 27
          },
          end: {
            line: 33,
            column: 28
          }
        },
        loc: {
          start: {
            line: 33,
            column: 42
          },
          end: {
            line: 33,
            column: 68
          }
        },
        line: 33
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 34,
            column: 24
          },
          end: {
            line: 34,
            column: 25
          }
        },
        loc: {
          start: {
            line: 34,
            column: 39
          },
          end: {
            line: 34,
            column: 65
          }
        },
        line: 34
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
      "16": 0,
      "17": 0,
      "18": 0
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
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7ade822ddad6df6c184ad0f2e77df1e31428e347"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_48dncu3ke = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_48dncu3ke();
const {
  REDIS_URL,
  REDIS_PWD
} = (cov_48dncu3ke().s[0]++, process.env);
const redisClient = (cov_48dncu3ke().s[1]++, (0, _redis.createClient)({
  url: REDIS_URL,
  password: REDIS_PWD
}));
cov_48dncu3ke().s[2]++;
redisClient.on("connect", () => {
  cov_48dncu3ke().f[0]++;
  cov_48dncu3ke().s[3]++;

  _logger.default.info("Redis client connected...");
});
cov_48dncu3ke().s[4]++;
redisClient.on("ready", () => {
  cov_48dncu3ke().f[1]++;
  cov_48dncu3ke().s[5]++;

  _logger.default.success("Redis client connected and ready to use...");
});
cov_48dncu3ke().s[6]++;
redisClient.on("error", err => {
  cov_48dncu3ke().f[2]++;
  cov_48dncu3ke().s[7]++;

  _logger.default.error("Redis Error 💥: " + err);
});
cov_48dncu3ke().s[8]++;
redisClient.on("end", err => {
  cov_48dncu3ke().f[3]++;
  cov_48dncu3ke().s[9]++;

  _logger.default.warn();

  cov_48dncu3ke().s[10]++;
  "Redis client end...";
});
cov_48dncu3ke().s[11]++;

(async () => {
  cov_48dncu3ke().f[4]++;
  cov_48dncu3ke().s[12]++;
  await redisClient.connect();
})();

cov_48dncu3ke().s[13]++;

const setToken = async (key, value) => {
  cov_48dncu3ke().f[5]++;
  cov_48dncu3ke().s[14]++;
  return await redisClient.set(key, value);
};

exports.setToken = setToken;
cov_48dncu3ke().s[15]++;

const deleteToken = async key => {
  cov_48dncu3ke().f[6]++;
  cov_48dncu3ke().s[16]++;
  return await redisClient.del(key);
};

exports.deleteToken = deleteToken;
cov_48dncu3ke().s[17]++;

const getToken = async key => {
  cov_48dncu3ke().f[7]++;
  cov_48dncu3ke().s[18]++;
  return await redisClient.get(key);
};

exports.getToken = getToken;
var _default = redisClient;
exports.default = _default;