"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _eduLanguages = require("../../../../controllers/eduLanguages.controller");

var _authentication = require("../../../../middlewares/authentication");

var _contentChecker = require("../../../../middlewares/contentChecker");

var _deleteContent = require("../../../../services/deleteContent.service");

var _getContent = require("../../../../services/getContent.service");

var _validations = require("../../../../utils/validations");

function cov_1oro4igu3f() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\eduLanguages.js";
  var hash = "8eb9d7f14890193ebea916114e99bb54274b7548";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\eduLanguages.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 15
        },
        end: {
          line: 12,
          column: 31
        }
      },
      "1": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 55
        }
      },
      "2": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 55
        }
      },
      "3": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 24
        }
      },
      "4": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 43
        }
      },
      "5": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 57
        }
      },
      "6": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 26,
          column: 2
        }
      },
      "7": {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 27,
          column: 66
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8eb9d7f14890193ebea916114e99bb54274b7548"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1oro4igu3f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1oro4igu3f();
const router = (cov_1oro4igu3f().s[0]++, _express.default.Router());
cov_1oro4igu3f().s[1]++;
router.get("/", (0, _contentChecker.findAllData)("edu_languages"), _getContent.getData);
cov_1oro4igu3f().s[2]++;
router.get("/:id", (0, _contentChecker.findData)("edu_languages"), _getContent.getData);
cov_1oro4igu3f().s[3]++;
router.use(_authentication.verifyToken);
cov_1oro4igu3f().s[4]++;
router.use(_authentication.isEbindUserLoggedInAndVerified);
cov_1oro4igu3f().s[5]++;
router.post("/", _validations.validateEduLanguage, _eduLanguages.createEduLanguage);
cov_1oro4igu3f().s[6]++;
router.patch("/:id", _validations.validateUpdateEduLanguage, (0, _contentChecker.findData)("edu_languages"), _eduLanguages.updateEduLanguage);
cov_1oro4igu3f().s[7]++;
router.delete("/:id", (0, _contentChecker.findData)("edu_languages"), _deleteContent.temporaryDelete);
var _default = router;
exports.default = _default;
module.exports = exports.default;