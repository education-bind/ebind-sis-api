"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _schools = require("../../../../controllers/schools.controller");

var _authentication = require("../../../../middlewares/authentication");

var _contentChecker = require("../../../../middlewares/contentChecker");

var _deleteContent = require("../../../../services/deleteContent.service");

var _getContent = require("../../../../services/getContent.service");

var _multer = require("../../../../utils/multer");

var _validations = require("../../../../utils/validations");

function cov_1b01k0gwrh() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\schools.js";
  var hash = "349c1775fc0de7b8dae11d81f41171824096025b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\schools.js",
    statementMap: {
      0: {
        start: {
          line: 19,
          column: 15,
        },
        end: {
          line: 19,
          column: 31,
        },
      },
      1: {
        start: {
          line: 21,
          column: 0,
        },
        end: {
          line: 21,
          column: 49,
        },
      },
      2: {
        start: {
          line: 22,
          column: 0,
        },
        end: {
          line: 22,
          column: 49,
        },
      },
      3: {
        start: {
          line: 24,
          column: 0,
        },
        end: {
          line: 24,
          column: 24,
        },
      },
      4: {
        start: {
          line: 26,
          column: 0,
        },
        end: {
          line: 26,
          column: 43,
        },
      },
      5: {
        start: {
          line: 27,
          column: 0,
        },
        end: {
          line: 27,
          column: 76,
        },
      },
      6: {
        start: {
          line: 28,
          column: 0,
        },
        end: {
          line: 34,
          column: 2,
        },
      },
      7: {
        start: {
          line: 35,
          column: 0,
        },
        end: {
          line: 35,
          column: 60,
        },
      },
    },
    fnMap: {},
    branchMap: {},
    s: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "349c1775fc0de7b8dae11d81f41171824096025b",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1b01k0gwrh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1b01k0gwrh();
const router = (cov_1b01k0gwrh().s[0]++, _express.default.Router());
cov_1b01k0gwrh().s[1]++;
router.get(
  "/",
  (0, _contentChecker.findAllData)("schools"),
  _getContent.getData
);
cov_1b01k0gwrh().s[2]++;
router.get(
  "/:id",
  (0, _contentChecker.findData)("schools"),
  _getContent.getData
);
cov_1b01k0gwrh().s[3]++;
router.use(_authentication.verifyToken);
cov_1b01k0gwrh().s[4]++;
router.use(_authentication.isEbindUserLoggedInAndVerified);
cov_1b01k0gwrh().s[5]++;
router.post(
  "/",
  _multer.uploads.single("logoImage"),
  _validations.validateSchool,
  _schools.createSchool
);
cov_1b01k0gwrh().s[6]++;
router.patch(
  "/:id",
  (0, _contentChecker.findData)("schools"),
  _multer.uploads.single("logoImage"),
  _validations.validateUpdateSchool,
  _schools.updateSchool
);
cov_1b01k0gwrh().s[7]++;
router.delete(
  "/:id",
  (0, _contentChecker.findData)("schools"),
  _deleteContent.temporaryDelete
);
var _default = router;
exports.default = _default;
module.exports = exports.default;
