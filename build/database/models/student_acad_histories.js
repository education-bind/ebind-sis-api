"use strict";

function cov_1jdepq7soh() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_acad_histories.js";
  var hash = "3b53028d3285b3f0410f56804c97944e20a830f9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_acad_histories.js",
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
          line: 36,
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
          column: 76
        }
      },
      "3": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 72
        }
      },
      "4": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 16,
          column: 9
        }
      },
      "5": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 21,
          column: 8
        }
      },
      "6": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 34,
          column: 4
        }
      },
      "7": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 32
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
            line: 36,
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
            column: 74
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        loc: {
          start: {
            line: 18,
            column: 13
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 18
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
    hash: "3b53028d3285b3f0410f56804c97944e20a830f9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1jdepq7soh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1jdepq7soh();
const {
  Model
} = (cov_1jdepq7soh().s[0]++, require("sequelize"));
cov_1jdepq7soh().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1jdepq7soh().f[0]++;

  class student_acad_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools,
      edu_fac_acad_year_semisters
    }) {
      cov_1jdepq7soh().f[1]++;
      cov_1jdepq7soh().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "studentId",
        as: "student"
      });
      cov_1jdepq7soh().s[3]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
      cov_1jdepq7soh().s[4]++;
      this.belongsTo(edu_fac_acad_year_semisters, {
        foreignKey: "eduFacAcadYearSemId",
        as: "AcademicYearSemister"
      });
    }

    toJSON() {
      cov_1jdepq7soh().f[2]++;
      cov_1jdepq7soh().s[5]++;
      return { ...this.get()
      };
    }

  }

  cov_1jdepq7soh().s[6]++;
  student_acad_histories.init({
    entryDate: DataTypes.DATE,
    exitDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "student_acad_histories"
  });
  cov_1jdepq7soh().s[7]++;
  return student_acad_histories;
};