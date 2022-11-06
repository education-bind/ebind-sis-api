"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.uploads = exports.fileUpload = void 0;

var _appError = _interopRequireDefault(require("./appError.js"));

var _cloudinary = _interopRequireDefault(
  require("../config/cloudinary.config")
);

var _customMessages = _interopRequireDefault(
  require("../utils/customMessages")
);

var _multer = _interopRequireDefault(require("multer"));

function cov_2asa35rmuq() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\multer.js";
  var hash = "7bfb860b6b37a15def0d0c16ed1ca869efeb6e51";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\multer.js",
    statementMap: {
      0: {
        start: {
          line: 6,
          column: 25,
        },
        end: {
          line: 6,
          column: 39,
        },
      },
      1: {
        start: {
          line: 7,
          column: 16,
        },
        end: {
          line: 7,
          column: 38,
        },
      },
      2: {
        start: {
          line: 9,
          column: 19,
        },
        end: {
          line: 15,
          column: 1,
        },
      },
      3: {
        start: {
          line: 10,
          column: 2,
        },
        end: {
          line: 14,
          column: 3,
        },
      },
      4: {
        start: {
          line: 11,
          column: 4,
        },
        end: {
          line: 11,
          column: 19,
        },
      },
      5: {
        start: {
          line: 13,
          column: 4,
        },
        end: {
          line: 13,
          column: 47,
        },
      },
      6: {
        start: {
          line: 17,
          column: 23,
        },
        end: {
          line: 17,
          column: 54,
        },
      },
      7: {
        start: {
          line: 19,
          column: 26,
        },
        end: {
          line: 32,
          column: 1,
        },
      },
      8: {
        start: {
          line: 20,
          column: 2,
        },
        end: {
          line: 20,
          column: 24,
        },
      },
      9: {
        start: {
          line: 20,
          column: 17,
        },
        end: {
          line: 20,
          column: 24,
        },
      },
      10: {
        start: {
          line: 21,
          column: 17,
        },
        end: {
          line: 21,
          column: 19,
        },
      },
      11: {
        start: {
          line: 22,
          column: 2,
        },
        end: {
          line: 30,
          column: 4,
        },
      },
      12: {
        start: {
          line: 25,
          column: 6,
        },
        end: {
          line: 27,
          column: 7,
        },
      },
      13: {
        start: {
          line: 26,
          column: 8,
        },
        end: {
          line: 26,
          column: 39,
        },
      },
      14: {
        start: {
          line: 28,
          column: 6,
        },
        end: {
          line: 28,
          column: 27,
        },
      },
      15: {
        start: {
          line: 31,
          column: 2,
        },
        end: {
          line: 31,
          column: 18,
        },
      },
    },
    fnMap: {
      0: {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 19,
          },
          end: {
            line: 9,
            column: 20,
          },
        },
        loc: {
          start: {
            line: 9,
            column: 38,
          },
          end: {
            line: 15,
            column: 1,
          },
        },
        line: 9,
      },
      1: {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 26,
          },
          end: {
            line: 19,
            column: 27,
          },
        },
        loc: {
          start: {
            line: 19,
            column: 47,
          },
          end: {
            line: 32,
            column: 1,
          },
        },
        line: 19,
      },
      2: {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 4,
          },
          end: {
            line: 24,
            column: 5,
          },
        },
        loc: {
          start: {
            line: 24,
            column: 32,
          },
          end: {
            line: 29,
            column: 5,
          },
        },
        line: 24,
      },
    },
    branchMap: {
      0: {
        loc: {
          start: {
            line: 10,
            column: 2,
          },
          end: {
            line: 14,
            column: 3,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 10,
              column: 2,
            },
            end: {
              line: 14,
              column: 3,
            },
          },
          {
            start: {
              line: 12,
              column: 9,
            },
            end: {
              line: 14,
              column: 3,
            },
          },
        ],
        line: 10,
      },
      1: {
        loc: {
          start: {
            line: 20,
            column: 2,
          },
          end: {
            line: 20,
            column: 24,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 20,
              column: 2,
            },
            end: {
              line: 20,
              column: 24,
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
        line: 20,
      },
      2: {
        loc: {
          start: {
            line: 25,
            column: 6,
          },
          end: {
            line: 27,
            column: 7,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 25,
              column: 6,
            },
            end: {
              line: 27,
              column: 7,
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
        line: 25,
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
      14: 0,
      15: 0,
    },
    f: {
      0: 0,
      1: 0,
      2: 0,
    },
    b: {
      0: [0, 0],
      1: [0, 0],
      2: [0, 0],
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7bfb860b6b37a15def0d0c16ed1ca869efeb6e51",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2asa35rmuq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2asa35rmuq();
const { invalidImage } = (cov_2asa35rmuq().s[0]++, _customMessages.default);
const storage = (cov_2asa35rmuq().s[1]++, _multer.default.diskStorage({}));
cov_2asa35rmuq().s[2]++;

const fileFilter = (req, file, cb) => {
  cov_2asa35rmuq().f[0]++;
  cov_2asa35rmuq().s[3]++;

  if (file.mimetype.startsWith("image")) {
    cov_2asa35rmuq().b[0][0]++;
    cov_2asa35rmuq().s[4]++;
    cb(null, true);
  } else {
    cov_2asa35rmuq().b[0][1]++;
    cov_2asa35rmuq().s[5]++;
    cb(new _appError.default(invalidImage, 400), false);
  }
};

const uploads =
  (cov_2asa35rmuq().s[6]++,
  (0, _multer.default)({
    storage,
    fileFilter,
  }));
exports.uploads = uploads;
cov_2asa35rmuq().s[7]++;

const fileUpload = async (req, next) => {
  cov_2asa35rmuq().f[1]++;
  cov_2asa35rmuq().s[8]++;

  if (!req.file) {
    cov_2asa35rmuq().b[1][0]++;
    cov_2asa35rmuq().s[9]++;
    return;
  } else {
    cov_2asa35rmuq().b[1][1]++;
  }

  let imageUrl = (cov_2asa35rmuq().s[10]++, "");
  cov_2asa35rmuq().s[11]++;
  await _cloudinary.default.v2.uploader.upload(
    req.file.path,
    async function (err, image) {
      cov_2asa35rmuq().f[2]++;
      cov_2asa35rmuq().s[12]++;

      if (err) {
        cov_2asa35rmuq().b[2][0]++;
        cov_2asa35rmuq().s[13]++;
        return next(new _appError.default(err));
      } else {
        cov_2asa35rmuq().b[2][1]++;
      }

      cov_2asa35rmuq().s[14]++;
      imageUrl = image.url;
    }
  );
  cov_2asa35rmuq().s[15]++;
  return imageUrl;
};

exports.fileUpload = fileUpload;
