"use strict";

function cov_2r6y8tl9au() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_displines.js";
  var hash = "95d060b111429325b1cdfad23628b8ca5146f3c1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_displines.js",
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
          line: 35,
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
          line: 33,
          column: 4
        }
      },
      "7": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 27
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
            line: 35,
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
    hash: "95d060b111429325b1cdfad23628b8ca5146f3c1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2r6y8tl9au = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2r6y8tl9au();
const {
  Model
} = (cov_2r6y8tl9au().s[0]++, require("sequelize"));
cov_2r6y8tl9au().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_2r6y8tl9au().f[0]++;

  class student_displines extends Model {
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
      cov_2r6y8tl9au().f[1]++;
      cov_2r6y8tl9au().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "studentId",
        as: "student"
      });
      cov_2r6y8tl9au().s[3]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
      cov_2r6y8tl9au().s[4]++;
      this.belongsTo(edu_fac_acad_year_semisters, {
        foreignKey: "eduFacAcadYearSemId",
        as: "educationFacultyAcademicYearSemister"
      });
    }

    toJSON() {
      cov_2r6y8tl9au().f[2]++;
      cov_2r6y8tl9au().s[5]++;
      return { ...this.get()
      };
    }

  }

  cov_2r6y8tl9au().s[6]++;
  student_displines.init({
    displineScore: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "student_displines"
  });
  cov_2r6y8tl9au().s[7]++;
  return student_displines;
};