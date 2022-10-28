"use strict";

function cov_vm7a0uap4() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_fac_class_modules.js";
  var hash = "e05e0f011f73699914d7147673d39138dde57a34";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_fac_class_modules.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 18
        },
        end: {
          line: 2,
          column: 38
        }
      },
      "1": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 39,
          column: 2
        }
      },
      "2": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 14,
          column: 9
        }
      },
      "3": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "4": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 23,
          column: 8
        }
      },
      "5": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 37,
          column: 4
        }
      },
      "6": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 17
          },
          end: {
            line: 3,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        loc: {
          start: {
            line: 10,
            column: 57
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 20,
            column: 13
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 20
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e05e0f011f73699914d7147673d39138dde57a34"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_vm7a0uap4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_vm7a0uap4();
const {
  Model
} = (cov_vm7a0uap4().s[0]++, require("sequelize"));
cov_vm7a0uap4().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_vm7a0uap4().f[0]++;

  class edu_fac_class_modules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_faculties,
      edu_fac_classes
    }) {
      cov_vm7a0uap4().f[1]++;
      cov_vm7a0uap4().s[2]++;
      this.belongsTo(edu_faculties, {
        foreignKey: "eduFacultyId",
        as: "educationFaculty"
      });
      cov_vm7a0uap4().s[3]++;
      this.belongsTo(edu_fac_classes, {
        foreignKey: "eduFacClassId",
        as: "educationFaculityClass"
      });
    }

    toJSON() {
      cov_vm7a0uap4().f[2]++;
      cov_vm7a0uap4().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_vm7a0uap4().s[5]++;
  edu_fac_class_modules.init({
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "edu_fac_class_modules"
  });
  cov_vm7a0uap4().s[6]++;
  return edu_fac_class_modules;
};