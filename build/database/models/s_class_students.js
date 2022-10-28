"use strict";

function cov_hyt7d3xwg() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_class_students.js";
  var hash = "858052959d47015203a0ead31714f85ea6cf4984";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_class_students.js",
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
          line: 31,
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
          line: 13,
          column: 78
        }
      },
      "5": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 18,
          column: 8
        }
      },
      "6": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 29,
          column: 4
        }
      },
      "7": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 26
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
            line: 31,
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
            column: 56
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 15
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
    hash: "858052959d47015203a0ead31714f85ea6cf4984"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_hyt7d3xwg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_hyt7d3xwg();
const {
  Model
} = (cov_hyt7d3xwg().s[0]++, require("sequelize"));
cov_hyt7d3xwg().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_hyt7d3xwg().f[0]++;

  class s_class_students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools,
      s_classes
    }) {
      cov_hyt7d3xwg().f[1]++;
      cov_hyt7d3xwg().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "studentId",
        as: "student"
      });
      cov_hyt7d3xwg().s[3]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
      cov_hyt7d3xwg().s[4]++;
      this.belongsTo(s_classes, {
        foreignKey: "schoolClassId",
        as: "class"
      });
    }

    toJSON() {
      cov_hyt7d3xwg().f[2]++;
      cov_hyt7d3xwg().s[5]++;
      return { ...this.get()
      };
    }

  }

  cov_hyt7d3xwg().s[6]++;
  s_class_students.init({
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "s_class_students"
  });
  cov_hyt7d3xwg().s[7]++;
  return s_class_students;
};