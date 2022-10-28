"use strict";

function cov_11ldo37x8r() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_attendances.js";
  var hash = "fe76c171dbdb18bd7924e7396c06665acbf00e9b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_attendances.js",
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
          line: 44,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 76
        }
      },
      "3": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 72
        }
      },
      "4": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 21,
          column: 9
        }
      },
      "5": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 25,
          column: 9
        }
      },
      "6": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 30,
          column: 8
        }
      },
      "7": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 42,
          column: 4
        }
      },
      "8": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 43,
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
            line: 44,
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
            line: 15,
            column: 7
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        loc: {
          start: {
            line: 27,
            column: 13
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 27
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
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fe76c171dbdb18bd7924e7396c06665acbf00e9b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_11ldo37x8r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_11ldo37x8r();
const {
  Model
} = (cov_11ldo37x8r().s[0]++, require("sequelize"));
cov_11ldo37x8r().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_11ldo37x8r().f[0]++;

  class student_attendances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools,
      edu_fac_acad_year_semisters,
      s_class_timetables
    }) {
      cov_11ldo37x8r().f[1]++;
      cov_11ldo37x8r().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "studentId",
        as: "student"
      });
      cov_11ldo37x8r().s[3]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
      cov_11ldo37x8r().s[4]++;
      this.belongsTo(s_class_timetables, {
        foreignKey: "schoolClassTimetableId",
        as: "schoolClassTimetable"
      });
      cov_11ldo37x8r().s[5]++;
      this.belongsTo(edu_fac_acad_year_semisters, {
        foreignKey: "eduFacAcadYearSemId",
        as: "educationFacultyAcademicYearSemister"
      });
    }

    toJSON() {
      cov_11ldo37x8r().f[2]++;
      cov_11ldo37x8r().s[6]++;
      return { ...this.get()
      };
    }

  }

  cov_11ldo37x8r().s[7]++;
  student_attendances.init({
    status: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "student_attendances"
  });
  cov_11ldo37x8r().s[8]++;
  return student_attendances;
};