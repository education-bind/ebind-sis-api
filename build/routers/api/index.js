"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _v = _interopRequireDefault(require("./v1"));

function cov_1z9j0k5rb() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\index.js";
  var hash = "79f81e6f448578570bbd1e58d29beab764c72fe7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 18
        },
        end: {
          line: 4,
          column: 34
        }
      },
      "1": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 25
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "79f81e6f448578570bbd1e58d29beab764c72fe7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1z9j0k5rb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1z9j0k5rb();
const apiRouter = (cov_1z9j0k5rb().s[0]++, _express.default.Router());
cov_1z9j0k5rb().s[1]++;
apiRouter.use('/v1', _v.default);
var _default = apiRouter;
exports.default = _default;
module.exports = exports.default;