"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _eduFacultiesController = require("../../../../controllers/eduFaculties.controller.js");

var _authentication = require("../../../../middlewares/authentication");

var _contentChecker = require("../../../../middlewares/contentChecker");

var _deleteContent = require("../../../../services/deleteContent.service");

var _getContent = require("../../../../services/getContent.service");

var _multer = require("../../../../utils/multer.js");

var _validations = require("../../../../utils/validations");

function cov_2qqceuvteh() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\eduFaculties.js";
  var hash = "4653129d323a2533413068c27a17de816fdc6107";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\routers\\api\\v1\\ebind\\eduFaculties.js",
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
          column: 55,
        },
      },
      2: {
        start: {
          line: 22,
          column: 0,
        },
        end: {
          line: 22,
          column: 55,
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
          line: 32,
          column: 2,
        },
      },
      6: {
        start: {
          line: 33,
          column: 0,
        },
        end: {
          line: 39,
          column: 2,
        },
      },
      7: {
        start: {
          line: 40,
          column: 0,
        },
        end: {
          line: 40,
          column: 66,
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
    hash: "4653129d323a2533413068c27a17de816fdc6107",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2qqceuvteh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2qqceuvteh();
const router = (cov_2qqceuvteh().s[0]++, _express.default.Router());
cov_2qqceuvteh().s[1]++;
router.get(
  "/",
  (0, _contentChecker.findAllData)("edu_faculties"),
  _getContent.getData
);
cov_2qqceuvteh().s[2]++;
router.get(
  "/:id",
  (0, _contentChecker.findData)("edu_faculties"),
  _getContent.getData
);
cov_2qqceuvteh().s[3]++;
router.use(_authentication.verifyToken);
cov_2qqceuvteh().s[4]++;
router.use(_authentication.isEbindUserLoggedInAndVerified);
cov_2qqceuvteh().s[5]++;
router.post(
  "/",
  _multer.uploads.single("logoImage"),
  _validations.validateEduFaculties,
  _eduFacultiesController.createEduFaculties
);
cov_2qqceuvteh().s[6]++;
router.patch(
  "/:id",
  (0, _contentChecker.findData)("edu_faculties"),
  _multer.uploads.single("logoImage"),
  _validations.validateUpdateEduFaculties,
  _eduFacultiesController.updateEduFaculties
);
cov_2qqceuvteh().s[7]++;
router.delete(
  "/:id",
  (0, _contentChecker.findData)("edu_faculties"),
  _deleteContent.temporaryDelete
);
var _default = router;
exports.default = _default;
module.exports = exports.default;
