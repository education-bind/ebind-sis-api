"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.updateEduFaculties = exports.createEduFaculties = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _multer = require("../utils/multer");

var _responseHandlers = require("../utils/responseHandlers");

var _statusCodes = _interopRequireDefault(require("../utils/statusCodes"));

function cov_ddn8g3qam() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\eduFaculties.controller.js";
  var hash = "73dfb9c83c0ac3786e18e5360d530a795d335efa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\controllers\\eduFaculties.controller.js",
    statementMap: {
      0: {
        start: {
          line: 7,
          column: 26,
        },
        end: {
          line: 7,
          column: 28,
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
          column: 34,
        },
        end: {
          line: 22,
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
          line: 12,
          column: 66,
        },
        end: {
          line: 12,
          column: 74,
        },
      },
      5: {
        start: {
          line: 13,
          column: 20,
        },
        end: {
          line: 19,
          column: 4,
        },
      },
      6: {
        start: {
          line: 21,
          column: 2,
        },
        end: {
          line: 21,
          column: 50,
        },
      },
      7: {
        start: {
          line: 24,
          column: 34,
        },
        end: {
          line: 46,
          column: 2,
        },
      },
      8: {
        start: {
          line: 25,
          column: 13,
        },
        end: {
          line: 25,
          column: 26,
        },
      },
      9: {
        start: {
          line: 27,
          column: 2,
        },
        end: {
          line: 27,
          column: 59,
        },
      },
      10: {
        start: {
          line: 27,
          column: 16,
        },
        end: {
          line: 27,
          column: 59,
        },
      },
      11: {
        start: {
          line: 28,
          column: 66,
        },
        end: {
          line: 28,
          column: 74,
        },
      },
      12: {
        start: {
          line: 30,
          column: 20,
        },
        end: {
          line: 43,
          column: 3,
        },
      },
      13: {
        start: {
          line: 45,
          column: 2,
        },
        end: {
          line: 45,
          column: 45,
        },
      },
    },
    fnMap: {
      0: {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 45,
          },
          end: {
            line: 10,
            column: 46,
          },
        },
        loc: {
          start: {
            line: 10,
            column: 65,
          },
          end: {
            line: 22,
            column: 1,
          },
        },
        line: 10,
      },
      1: {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 24,
            column: 45,
          },
          end: {
            line: 24,
            column: 46,
          },
        },
        loc: {
          start: {
            line: 24,
            column: 65,
          },
          end: {
            line: 46,
            column: 1,
          },
        },
        line: 24,
      },
    },
    branchMap: {
      0: {
        loc: {
          start: {
            line: 27,
            column: 2,
          },
          end: {
            line: 27,
            column: 59,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 27,
              column: 2,
            },
            end: {
              line: 27,
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
        line: 27,
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
    hash: "73dfb9c83c0ac3786e18e5360d530a795d335efa",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ddn8g3qam = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ddn8g3qam();
const { edu_faculties } = (cov_ddn8g3qam().s[0]++, _models.default);
const { ok, created } = (cov_ddn8g3qam().s[1]++, _statusCodes.default);
const createEduFaculties =
  (cov_ddn8g3qam().s[2]++,
  (0, _catchAsync.default)(async (req, res) => {
    cov_ddn8g3qam().f[0]++;
    cov_ddn8g3qam().s[3]++;
    req.body.logoImage = await (0, _multer.fileUpload)(req);
    const { name, country, description, logoImage, abbreviation } =
      (cov_ddn8g3qam().s[4]++, req.body);
    const faculties =
      (cov_ddn8g3qam().s[5]++,
      await edu_faculties.create({
        name,
        countryId: country,
        description,
        logoimage: logoImage,
        abbreviation,
      }));
    cov_ddn8g3qam().s[6]++;
    return (0, _responseHandlers.successResponse)(res, created, faculties);
  }));
exports.createEduFaculties = createEduFaculties;
const updateEduFaculties =
  (cov_ddn8g3qam().s[7]++,
  (0, _catchAsync.default)(async (req, res) => {
    cov_ddn8g3qam().f[1]++;
    const id = (cov_ddn8g3qam().s[8]++, req.params.id);
    cov_ddn8g3qam().s[9]++;

    if (req.file) {
      cov_ddn8g3qam().b[0][0]++;
      cov_ddn8g3qam().s[10]++;
      req.body.logoImage = await (0, _multer.fileUpload)(req);
    } else {
      cov_ddn8g3qam().b[0][1]++;
    }

    const { name, country, description, logoImage, abbreviation } =
      (cov_ddn8g3qam().s[11]++, req.body);
    const faculties =
      (cov_ddn8g3qam().s[12]++,
      await edu_faculties.update(
        {
          name,
          countryId: country,
          description,
          logoimage: logoImage,
          abbreviation,
        },
        {
          where: {
            id,
          },
          returning: true,
          plain: true,
        }
      ));
    cov_ddn8g3qam().s[13]++;
    return (0, _responseHandlers.successResponse)(res, ok, faculties);
  }));
exports.updateEduFaculties = updateEduFaculties;
