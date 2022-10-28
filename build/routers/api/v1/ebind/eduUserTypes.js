"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _eduUserTypes = require("../../../../controllers/eduUserTypes.controller");

var _authentication = require("../../../../middlewares/authentication");

var _contentChecker = require("../../../../middlewares/contentChecker");

var _deleteContent = require("../../../../services/deleteContent.service");

var _getContent = require("../../../../services/getContent.service");

var _validations = require("../../../../utils/validations");

function cov_1l78p2mih7() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\eduUserTypes.js";
  var hash = "cab46957c35865c9be420d17ae016ee56272839c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\eduUserTypes.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 15
        },
        end: {
          line: 15,
          column: 31
        }
      },
      "1": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 56
        }
      },
      "2": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 56
        }
      },
      "3": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 24
        }
      },
      "4": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 43
        }
      },
      "5": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 58
        }
      },
      "6": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 29,
          column: 2
        }
      },
      "7": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 67
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
    hash: "cab46957c35865c9be420d17ae016ee56272839c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1l78p2mih7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1l78p2mih7();
const router = (cov_1l78p2mih7().s[0]++, _express.default.Router());
cov_1l78p2mih7().s[1]++;
router.get("/", (0, _contentChecker.findAllData)("edu_user_types"), _getContent.getData);
cov_1l78p2mih7().s[2]++;
router.get("/:id", (0, _contentChecker.findData)("edu_user_types"), _getContent.getData);
cov_1l78p2mih7().s[3]++;
router.use(_authentication.verifyToken);
cov_1l78p2mih7().s[4]++;
router.use(_authentication.isEbindUserLoggedInAndVerified);
cov_1l78p2mih7().s[5]++;
router.post("/", _validations.validateEduUserTypes, _eduUserTypes.createEduUserType);
cov_1l78p2mih7().s[6]++;
router.patch("/:id", _validations.validateEduUserTypes, (0, _contentChecker.findData)("edu_user_types"), _eduUserTypes.updateEduUserType);
cov_1l78p2mih7().s[7]++;
router.delete("/:id", (0, _contentChecker.findData)("edu_user_types"), _deleteContent.temporaryDelete);
var _default = router;
exports.default = _default;
module.exports = exports.default;