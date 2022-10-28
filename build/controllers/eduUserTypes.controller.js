"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEduUserType = exports.createEduUserType = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _responseHandlers = require("../utils/responseHandlers");

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_2ku8j7wpzr() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\eduUserTypes.controller.js";
  var hash = "de892b6b45fbdefbd2af86702d09843e4d00e4e6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\eduUserTypes.controller.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 27
        },
        end: {
          line: 6,
          column: 29
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
          column: 19
        },
        end: {
          line: 10,
          column: 27
        }
      },
      "4": {
        start: {
          line: 11,
          column: 20
        },
        end: {
          line: 11,
          column: 57
        }
      },
      "5": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 50
        }
      },
      "6": {
        start: {
          line: 16,
          column: 33
        },
        end: {
          line: 31,
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
          column: 19
        },
        end: {
          line: 18,
          column: 27
        }
      },
      "9": {
        start: {
          line: 19,
          column: 20
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "10": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 45
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
            line: 31,
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
    hash: "de892b6b45fbdefbd2af86702d09843e4d00e4e6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ku8j7wpzr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ku8j7wpzr();
const {
  edu_user_types
} = (cov_2ku8j7wpzr().s[0]++, _models.default);
const {
  ok,
  created
} = (cov_2ku8j7wpzr().s[1]++, _statusCodes.default);
const createEduUserType = (cov_2ku8j7wpzr().s[2]++, (0, _catchAsync.default)(async (req, res) => {
  cov_2ku8j7wpzr().f[0]++;
  const {
    name
  } = (cov_2ku8j7wpzr().s[3]++, req.body);
  const userTypes = (cov_2ku8j7wpzr().s[4]++, await edu_user_types.create({
    name
  }));
  cov_2ku8j7wpzr().s[5]++;
  return (0, _responseHandlers.successResponse)(res, created, userTypes);
}));
exports.createEduUserType = createEduUserType;
const updateEduUserType = (cov_2ku8j7wpzr().s[6]++, (0, _catchAsync.default)(async (req, res) => {
  cov_2ku8j7wpzr().f[1]++;
  const id = (cov_2ku8j7wpzr().s[7]++, req.params.id);
  const {
    name
  } = (cov_2ku8j7wpzr().s[8]++, req.body);
  const userTypes = (cov_2ku8j7wpzr().s[9]++, await edu_user_types.update({
    name
  }, {
    where: {
      id
    },
    returning: true,
    plain: true
  }));
  cov_2ku8j7wpzr().s[10]++;
  return (0, _responseHandlers.successResponse)(res, ok, userTypes);
}));
exports.updateEduUserType = updateEduUserType;