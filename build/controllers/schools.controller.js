"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.updateSchool = exports.createSchool = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _multer = require("../utils/multer");

var _responseHandlers = require("../utils/responseHandlers");

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_2p8phsybcl() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\schools.controller.js";
  var hash = "865b5d8b6e7d07d76815517c1c75142ff223ce06";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\schools.controller.js",
    statementMap: {
      0: {
        start: {
          line: 7,
          column: 20,
        },
        end: {
          line: 7,
          column: 22,
        },
      },
      1: {
        start: {
          line: 8,
          column: 24,
        },
        end: {
          line: 8,
          column: 34,
        },
      },
      2: {
        start: {
          line: 10,
          column: 28,
        },
        end: {
          line: 42,
          column: 2,
        },
      },
      3: {
        start: {
          line: 11,
          column: 2,
        },
        end: {
          line: 11,
          column: 45,
        },
      },
      4: {
        start: {
          line: 25,
          column: 6,
        },
        end: {
          line: 25,
          column: 14,
        },
      },
      5: {
        start: {
          line: 26,
          column: 17,
        },
        end: {
          line: 39,
          column: 4,
        },
      },
      6: {
        start: {
          line: 41,
          column: 2,
        },
        end: {
          line: 41,
          column: 47,
        },
      },
      7: {
        start: {
          line: 44,
          column: 28,
        },
        end: {
          line: 85,
          column: 2,
        },
      },
      8: {
        start: {
          line: 45,
          column: 2,
        },
        end: {
          line: 45,
          column: 59,
        },
      },
      9: {
        start: {
          line: 45,
          column: 16,
        },
        end: {
          line: 45,
          column: 59,
        },
      },
      10: {
        start: {
          line: 46,
          column: 13,
        },
        end: {
          line: 46,
          column: 26,
        },
      },
      11: {
        start: {
          line: 60,
          column: 6,
        },
        end: {
          line: 60,
          column: 14,
        },
      },
      12: {
        start: {
          line: 62,
          column: 17,
        },
        end: {
          line: 82,
          column: 3,
        },
      },
      13: {
        start: {
          line: 84,
          column: 2,
        },
        end: {
          line: 84,
          column: 42,
        },
      },
    },
    fnMap: {
      0: {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 39,
          },
          end: {
            line: 10,
            column: 40,
          },
        },
        loc: {
          start: {
            line: 10,
            column: 59,
          },
          end: {
            line: 42,
            column: 1,
          },
        },
        line: 10,
      },
      1: {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 44,
            column: 39,
          },
          end: {
            line: 44,
            column: 40,
          },
        },
        loc: {
          start: {
            line: 44,
            column: 59,
          },
          end: {
            line: 85,
            column: 1,
          },
        },
        line: 44,
      },
    },
    branchMap: {
      0: {
        loc: {
          start: {
            line: 45,
            column: 2,
          },
          end: {
            line: 45,
            column: 59,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 45,
              column: 2,
            },
            end: {
              line: 45,
              column: 59,
            },
          },
          {
            start: {
              line: undefined,
              column: undefined,
            },
            end: {
              line: undefined,
              column: undefined,
            },
          },
        ],
        line: 45,
      },
    },
    s: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
    },
    f: {
      0: 0,
      1: 0,
    },
    b: {
      0: [0, 0],
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "865b5d8b6e7d07d76815517c1c75142ff223ce06",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2p8phsybcl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2p8phsybcl();
const { schools } = (cov_2p8phsybcl().s[0]++, _models.default);
const { ok, created } = (cov_2p8phsybcl().s[1]++, _statusCodes.default);
const createSchool =
  (cov_2p8phsybcl().s[2]++,
  (0, _catchAsync.default)(async (req, res) => {
    cov_2p8phsybcl().f[0]++;
    cov_2p8phsybcl().s[3]++;
    req.body.logoImage = await (0, _multer.fileUpload)(req);
    const {
      country,
      city,
      name,
      abbreviation,
      admin,
      regDate,
      email,
      phoneNumber,
      description,
      logoImage,
      longitude,
      latitude,
    } = (cov_2p8phsybcl().s[4]++, req.body);
    const school =
      (cov_2p8phsybcl().s[5]++,
      await schools.create({
        countryId: country,
        city,
        name,
        abbreviation,
        adminId: admin,
        regDate,
        email,
        phoneNumber,
        description,
        logoImage,
        longitude,
        latitude,
      }));
    cov_2p8phsybcl().s[6]++;
    return (0, _responseHandlers.successResponse)(res, created, school);
  }));
exports.createSchool = createSchool;
const updateSchool =
  (cov_2p8phsybcl().s[7]++,
  (0, _catchAsync.default)(async (req, res) => {
    cov_2p8phsybcl().f[1]++;
    cov_2p8phsybcl().s[8]++;

    if (req.file) {
      cov_2p8phsybcl().b[0][0]++;
      cov_2p8phsybcl().s[9]++;
      req.body.logoImage = await (0, _multer.fileUpload)(req);
    } else {
      cov_2p8phsybcl().b[0][1]++;
    }

    const id = (cov_2p8phsybcl().s[10]++, req.params.id);
    const {
      country,
      city,
      name,
      abbreviation,
      admin,
      regDate,
      email,
      phoneNumber,
      description,
      logoImage,
      longitude,
      latitude,
    } = (cov_2p8phsybcl().s[11]++, req.body);
    const school =
      (cov_2p8phsybcl().s[12]++,
      await schools.update(
        {
          countryId: country,
          city,
          name,
          abbreviation,
          adminId: admin,
          regDate,
          email,
          phoneNumber,
          description,
          logoImage,
          longitude,
          latitude,
        },
        {
          where: {
            id,
          },
          returning: true,
          plain: true,
        }
      ));
    cov_2p8phsybcl().s[13]++;
    return (0, _responseHandlers.successResponse)(res, ok, school);
  }));
exports.updateSchool = updateSchool;
