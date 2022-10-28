"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.temporaryDelete = void 0;

var _customMessages = _interopRequireDefault(require("../utils/customMessages"));

var _responseHandlers = require("../utils/responseHandlers");

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

function cov_4r7305m7k() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\services\\deleteContent.service.js";
  var hash = "30009b6caf1f4e86634975c77a8424e83b3d2e81";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\services\\deleteContent.service.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 5,
          column: 35
        }
      },
      "1": {
        start: {
          line: 7,
          column: 31
        },
        end: {
          line: 20,
          column: 2
        }
      },
      "2": {
        start: {
          line: 8,
          column: 17
        },
        end: {
          line: 8,
          column: 27
        }
      },
      "3": {
        start: {
          line: 9,
          column: 28
        },
        end: {
          line: 9,
          column: 31
        }
      },
      "4": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 18,
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
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 42
          },
          end: {
            line: 7,
            column: 43
          }
        },
        loc: {
          start: {
            line: 7,
            column: 68
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "30009b6caf1f4e86634975c77a8424e83b3d2e81"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_4r7305m7k = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_4r7305m7k();
const {
  contentDeleted
} = (cov_4r7305m7k().s[0]++, _customMessages.default);
const temporaryDelete = (cov_4r7305m7k().s[1]++, (0, _catchAsync.default)(async (req, res, next) => {
  cov_4r7305m7k().f[0]++;
  const {
    id
  } = (cov_4r7305m7k().s[2]++, req.params);
  const {
    databaseTable
  } = (cov_4r7305m7k().s[3]++, req);
  cov_4r7305m7k().s[4]++;
  await databaseTable.update({
    active: false
  }, {
    where: {
      id
    }
  });
  cov_4r7305m7k().s[5]++;
  return (0, _responseHandlers.deleteResponse)(res, contentDeleted);
}));
exports.temporaryDelete = temporaryDelete;