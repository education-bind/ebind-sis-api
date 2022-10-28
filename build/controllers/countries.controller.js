"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCountry = exports.createCountry = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _responseHandlers = require("../utils/responseHandlers");

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_12t2tefofd() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\countries.controller.js";
  var hash = "762c4c80b0e43a68ab255fde42cca1473be5165f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\countries.controller.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 22
        },
        end: {
          line: 6,
          column: 24
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
          column: 29
        },
        end: {
          line: 20,
          column: 2
        }
      },
      "3": {
        start: {
          line: 10,
          column: 57
        },
        end: {
          line: 10,
          column: 65
        }
      },
      "4": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 17,
          column: 4
        }
      },
      "5": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 48
        }
      },
      "6": {
        start: {
          line: 22,
          column: 29
        },
        end: {
          line: 42,
          column: 2
        }
      },
      "7": {
        start: {
          line: 23,
          column: 13
        },
        end: {
          line: 23,
          column: 26
        }
      },
      "8": {
        start: {
          line: 24,
          column: 55
        },
        end: {
          line: 24,
          column: 63
        }
      },
      "9": {
        start: {
          line: 26,
          column: 18
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "10": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 40
          },
          end: {
            line: 9,
            column: 41
          }
        },
        loc: {
          start: {
            line: 9,
            column: 60
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 40
          },
          end: {
            line: 22,
            column: 41
          }
        },
        loc: {
          start: {
            line: 22,
            column: 60
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 22
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
    hash: "762c4c80b0e43a68ab255fde42cca1473be5165f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12t2tefofd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_12t2tefofd();
const {
  countries
} = (cov_12t2tefofd().s[0]++, _models.default);
const {
  ok,
  created
} = (cov_12t2tefofd().s[1]++, _statusCodes.default);
const createCountry = (cov_12t2tefofd().s[2]++, (0, _catchAsync.default)(async (req, res) => {
  cov_12t2tefofd().f[0]++;
  const {
    name,
    code,
    extension,
    latitude,
    longitude
  } = (cov_12t2tefofd().s[3]++, req.body);
  const country = (cov_12t2tefofd().s[4]++, await countries.create({
    name,
    code,
    extension,
    latitude,
    longitude
  }));
  cov_12t2tefofd().s[5]++;
  return (0, _responseHandlers.successResponse)(res, created, country);
}));
exports.createCountry = createCountry;
const updateCountry = (cov_12t2tefofd().s[6]++, (0, _catchAsync.default)(async (req, res) => {
  cov_12t2tefofd().f[1]++;
  const id = (cov_12t2tefofd().s[7]++, req.params.id);
  let {
    name,
    code,
    extension,
    latitude,
    longitude
  } = (cov_12t2tefofd().s[8]++, req.body);
  const country = (cov_12t2tefofd().s[9]++, await countries.update({
    name,
    code,
    extension,
    latitude,
    longitude
  }, {
    where: {
      id
    },
    returning: true,
    plain: true
  }));
  cov_12t2tefofd().s[10]++;
  return (0, _responseHandlers.successResponse)(res, ok, country);
}));
exports.updateCountry = updateCountry;