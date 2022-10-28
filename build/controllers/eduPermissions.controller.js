"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEduPermission = exports.createEduPermission = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _responseHandlers = require("../utils/responseHandlers");

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_2ek9ee0lpd() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\eduPermissions.controller.js";
  var hash = "c28fb439834e2b103ad7092dc941aeb5a95375c4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\eduPermissions.controller.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 28
        },
        end: {
          line: 6,
          column: 30
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
          column: 35
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
          column: 21
        },
        end: {
          line: 11,
          column: 59
        }
      },
      "5": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 51
        }
      },
      "6": {
        start: {
          line: 16,
          column: 35
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
          column: 21
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
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 46
          },
          end: {
            line: 9,
            column: 47
          }
        },
        loc: {
          start: {
            line: 9,
            column: 66
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
            column: 46
          },
          end: {
            line: 16,
            column: 47
          }
        },
        loc: {
          start: {
            line: 16,
            column: 66
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
    hash: "c28fb439834e2b103ad7092dc941aeb5a95375c4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ek9ee0lpd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ek9ee0lpd();
const {
  edu_permissions
} = (cov_2ek9ee0lpd().s[0]++, _models.default);
const {
  ok,
  created
} = (cov_2ek9ee0lpd().s[1]++, _statusCodes.default);
const createEduPermission = (cov_2ek9ee0lpd().s[2]++, (0, _catchAsync.default)(async (req, res) => {
  cov_2ek9ee0lpd().f[0]++;
  const {
    name
  } = (cov_2ek9ee0lpd().s[3]++, req.body);
  const permission = (cov_2ek9ee0lpd().s[4]++, await edu_permissions.create({
    name
  }));
  cov_2ek9ee0lpd().s[5]++;
  return (0, _responseHandlers.successResponse)(res, created, permission);
}));
exports.createEduPermission = createEduPermission;
const updateEduPermission = (cov_2ek9ee0lpd().s[6]++, (0, _catchAsync.default)(async (req, res) => {
  cov_2ek9ee0lpd().f[1]++;
  const id = (cov_2ek9ee0lpd().s[7]++, req.params.id);
  const {
    name
  } = (cov_2ek9ee0lpd().s[8]++, req.body);
  const permission = (cov_2ek9ee0lpd().s[9]++, await edu_permissions.update({
    name
  }, {
    where: {
      id
    },
    returning: true,
    plain: true
  }));
  cov_2ek9ee0lpd().s[10]++;
  return (0, _responseHandlers.successResponse)(res, ok, permission);
}));
exports.updateEduPermission = updateEduPermission;