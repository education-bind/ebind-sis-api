"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _countries = require("../../../../controllers/countries.controller");

var _authentication = require("../../../../middlewares/authentication");

var _contentChecker = require("../../../../middlewares/contentChecker");

var _deleteContent = require("../../../../services/deleteContent.service");

var _getContent = require("../../../../services/getContent.service");

var _validations = require("../../../../utils/validations");

function cov_d0yxr52he() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\countries.js";
  var hash = "bb6ee0aad635f80ed1ee8cc1eca35cfe37fdbb8f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\countries.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 15
        },
        end: {
          line: 18,
          column: 31
        }
      },
      "1": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 51
        }
      },
      "2": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 51
        }
      },
      "3": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 24
        }
      },
      "4": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 43
        }
      },
      "5": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 49
        }
      },
      "6": {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 32,
          column: 2
        }
      },
      "7": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 33,
          column: 62
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
    hash: "bb6ee0aad635f80ed1ee8cc1eca35cfe37fdbb8f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_d0yxr52he = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_d0yxr52he();
const router = (cov_d0yxr52he().s[0]++, _express.default.Router());
cov_d0yxr52he().s[1]++;
router.get("/", (0, _contentChecker.findAllData)("countries"), _getContent.getData);
cov_d0yxr52he().s[2]++;
router.get("/:id", (0, _contentChecker.findData)("countries"), _getContent.getData);
cov_d0yxr52he().s[3]++;
router.use(_authentication.verifyToken);
cov_d0yxr52he().s[4]++;
router.use(_authentication.isEbindUserLoggedInAndVerified);
cov_d0yxr52he().s[5]++;
router.post("/", _validations.validateCountry, _countries.createCountry);
cov_d0yxr52he().s[6]++;
router.patch("/:id", (0, _contentChecker.findData)("countries"), _validations.validateUpdateCountry, _countries.updateCountry);
cov_d0yxr52he().s[7]++;
router.delete("/:id", (0, _contentChecker.findData)("countries"), _deleteContent.temporaryDelete);
var _default = router;
exports.default = _default;
module.exports = exports.default;