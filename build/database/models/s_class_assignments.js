"use strict";

function cov_1kza2rlw3i() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_class_assignments.js";
  var hash = "20486dcf2833f3626a89d61be2d82e6f68b0c93f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_class_assignments.js",
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
          line: 38,
          column: 2
        }
      },
      "2": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 78
        }
      },
      "3": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 15,
          column: 9
        }
      },
      "4": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "5": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 24,
          column: 8
        }
      },
      "6": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 36,
          column: 4
        }
      },
      "7": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 29
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
            line: 38,
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
            column: 77
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 13
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 21
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
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "20486dcf2833f3626a89d61be2d82e6f68b0c93f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1kza2rlw3i = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1kza2rlw3i();
const {
  Model
} = (cov_1kza2rlw3i().s[0]++, require("sequelize"));
cov_1kza2rlw3i().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1kza2rlw3i().f[0]++;

  class s_class_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      s_classes,
      s_class_assignments,
      edu_fac_acad_years
    }) {
      cov_1kza2rlw3i().f[1]++;
      cov_1kza2rlw3i().s[2]++;
      this.belongsTo(s_classes, {
        foreignKey: "schoolClassId",
        as: "class"
      });
      cov_1kza2rlw3i().s[3]++;
      this.belongsTo(s_class_assignments, {
        foreignKey: "assignmentId",
        as: "assignment"
      });
      cov_1kza2rlw3i().s[4]++;
      this.belongsTo(edu_fac_acad_years, {
        foreignKey: "eduFacAcadYearSemId",
        as: "educationFacultyAcademicYearSemister"
      });
    }

    toJSON() {
      cov_1kza2rlw3i().f[2]++;
      cov_1kza2rlw3i().s[5]++;
      return { ...this.get()
      };
    }

  }

  cov_1kza2rlw3i().s[6]++;
  s_class_assignments.init({
    assignmentDueDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "s_class_assignments"
  });
  cov_1kza2rlw3i().s[7]++;
  return s_class_assignments;
};