"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = require("../../../../controllers/authentication.controller");

var _authentication2 = require("../../../../middlewares/authentication");

var _credentialChecker = require("../../../../middlewares/credentialChecker");

function cov_12cla0mq11() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\authentication.js";
  var hash = "7281c98edfe74eb658bac5a47fada56e1180461d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\authentication.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 15
        },
        end: {
          line: 16,
          column: 31
        }
      },
      "1": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 24,
          column: 2
        }
      },
      "2": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 30,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7281c98edfe74eb658bac5a47fada56e1180461d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12cla0mq11 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_12cla0mq11();
const router = (cov_12cla0mq11().s[0]++, _express.default.Router());
cov_12cla0mq11().s[1]++;
router.post("/login", _credentialChecker.bothEmailAndPasswordExist, _credentialChecker.loginDataExistOnByOne, _credentialChecker.verifyCredentials, _authentication.eduUserLogin);
cov_12cla0mq11().s[2]++;
router.get("/logout", _authentication2.verifyToken, _authentication2.isEbindUserLoggedInAndVerified, _authentication.eduUserLogout);
var _default = router;
exports.default = _default;
module.exports = exports.default;