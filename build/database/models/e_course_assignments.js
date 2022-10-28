"use strict";

function cov_1rd4of61rz() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_course_assignments.js";
  var hash = "f4b83f6f859fec4c0c6425ff9df821eea0559476";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_course_assignments.js",
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
          line: 25,
          column: 8
        }
      },
      "5": {
        start: {
          line: 28,
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
          column: 30
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
            column: 59
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
            line: 26,
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
    hash: "f4b83f6f859fec4c0c6425ff9df821eea0559476"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rd4of61rz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1rd4of61rz();
const {
  Model
} = (cov_1rd4of61rz().s[0]++, require("sequelize"));
cov_1rd4of61rz().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1rd4of61rz().f[0]++;

  class e_course_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      e_course_sections,
      e_assignments
    }) {
      cov_1rd4of61rz().f[1]++;
      cov_1rd4of61rz().s[2]++;
      this.belongsTo(e_course_sections, {
        foreignKey: "eCourseSectionId",
        as: "eLearningCourseSection"
      });
      cov_1rd4of61rz().s[3]++;
      this.belongsTo(e_assignments, {
        foreignKey: "eAssignmentId",
        as: "eLearningAssignment"
      });
    }

    toJSON() {
      cov_1rd4of61rz().f[2]++;
      cov_1rd4of61rz().s[4]++;
      return { ...this.get(),
        eCourseSectionId: undefined,
        eAssignmentId: undefined
      };
    }

  }

  cov_1rd4of61rz().s[5]++;
  e_course_assignments.init({
    eCourseSectionId: DataTypes.INTEGER,
    eAssignmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "e_course_assignments"
  });
  cov_1rd4of61rz().s[6]++;
  return e_course_assignments;
};