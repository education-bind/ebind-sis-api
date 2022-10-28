"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _eduPermissions = require("../../../../controllers/eduPermissions.controller");

var _authentication = require("../../../../middlewares/authentication");

var _contentChecker = require("../../../../middlewares/contentChecker");

var _deleteContent = require("../../../../services/deleteContent.service");

var _getContent = require("../../../../services/getContent.service");

var _validations = require("../../../../utils/validations");

function cov_8rlihle3d() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\eduPermissions.js";
  var hash = "3f6128d23d8b4c782c1582ecc543eedd7269fef8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\eduPermissions.js",
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
          column: 57
        }
      },
      "2": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 57
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
          column: 61
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
          column: 68
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
    hash: "3f6128d23d8b4c782c1582ecc543eedd7269fef8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_8rlihle3d = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_8rlihle3d();
const router = (cov_8rlihle3d().s[0]++, _express.default.Router());
cov_8rlihle3d().s[1]++;
router.get("/", (0, _contentChecker.findAllData)("edu_permissions"), _getContent.getData);
cov_8rlihle3d().s[2]++;
router.get("/:id", (0, _contentChecker.findData)("edu_permissions"), _getContent.getData);
cov_8rlihle3d().s[3]++;
router.use(_authentication.verifyToken);
cov_8rlihle3d().s[4]++;
router.use(_authentication.isEbindUserLoggedInAndVerified);
cov_8rlihle3d().s[5]++;
router.post("/", _validations.validateEduPermission, _eduPermissions.createEduPermission);
cov_8rlihle3d().s[6]++;
router.patch("/:id", _validations.validateEduPermission, (0, _contentChecker.findData)("edu_permissions"), _eduPermissions.updateEduPermission);
cov_8rlihle3d().s[7]++;
router.delete("/:id", (0, _contentChecker.findData)("edu_permissions"), _deleteContent.temporaryDelete);
var _default = router;
exports.default = _default;
module.exports = exports.default;