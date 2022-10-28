"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEduLanguage = exports.createEduLanguage = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _responseHandlers = require("../utils/responseHandlers");

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_ilhjvtt8i() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\eduLanguages.controller.js";
  var hash = "685e567cdf49a433700e198b59ef4a1c78ab78e8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\eduLanguages.controller.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 6,
          column: 28
        }
      },
      "1": {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 7,
          column: 34
        }
      },
      "2": {
        start: {
          line: 9,
          column: 33
        },
        end: {
          line: 14,
          column: 2
        }
      },
      "3": {
        start: {
          line: 10,
          column: 33
        },
        end: {
          line: 10,
          column: 41
        }
      },
      "4": {
        start: {
          line: 11,
          column: 19
        },
        end: {
          line: 11,
          column: 69
        }
      },
      "5": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 49
        }
      },
      "6": {
        start: {
          line: 16,
          column: 33
        },
        end: {
          line: 32,
          column: 2
        }
      },
      "7": {
        start: {
          line: 17,
          column: 13
        },
        end: {
          line: 17,
          column: 26
        }
      },
      "8": {
        start: {
          line: 18,
          column: 31
        },
        end: {
          line: 18,
          column: 39
        }
      },
      "9": {
        start: {
          line: 20,
          column: 19
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "10": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 44
          },
          end: {
            line: 9,
            column: 45
          }
        },
        loc: {
          start: {
            line: 9,
            column: 64
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 44
          },
          end: {
            line: 16,
            column: 45
          }
        },
        loc: {
          start: {
            line: 16,
            column: 64
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 16
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
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "685e567cdf49a433700e198b59ef4a1c78ab78e8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ilhjvtt8i = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ilhjvtt8i();
const {
  edu_languages
} = (cov_ilhjvtt8i().s[0]++, _models.default);
const {
  ok,
  created
} = (cov_ilhjvtt8i().s[1]++, _statusCodes.default);
const createEduLanguage = (cov_ilhjvtt8i().s[2]++, (0, _catchAsync.default)(async (req, res) => {
  cov_ilhjvtt8i().f[0]++;
  const {
    name,
    abbreviation
  } = (cov_ilhjvtt8i().s[3]++, req.body);
  const language = (cov_ilhjvtt8i().s[4]++, await edu_languages.create({
    name,
    abbreviation
  }));
  cov_ilhjvtt8i().s[5]++;
  return (0, _responseHandlers.successResponse)(res, created, language);
}));
exports.createEduLanguage = createEduLanguage;
const updateEduLanguage = (cov_ilhjvtt8i().s[6]++, (0, _catchAsync.default)(async (req, res) => {
  cov_ilhjvtt8i().f[1]++;
  const id = (cov_ilhjvtt8i().s[7]++, req.params.id);
  let {
    name,
    abbreviation
  } = (cov_ilhjvtt8i().s[8]++, req.body);
  const language = (cov_ilhjvtt8i().s[9]++, await edu_languages.update({
    name,
    abbreviation
  }, {
    where: {
      id
    },
    returning: true,
    plain: true
  }));
  cov_ilhjvtt8i().s[10]++;
  return (0, _responseHandlers.successResponse)(res, ok, language);
}));
exports.updateEduLanguage = updateEduLanguage;