"use strict";

function cov_1nqrezcbw6() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\assignment_scores.js";
  var hash = "283ebc717a7fa2b3fd5d39b6ad12680be08dc8a2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\assignment_scores.js",
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
          line: 49,
          column: 2
        }
      },
      "2": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 76
        }
      },
      "3": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 72
        }
      },
      "4": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 72
        }
      },
      "5": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "6": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 27,
          column: 9
        }
      },
      "7": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 32,
          column: 8
        }
      },
      "8": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 47,
          column: 4
        }
      },
      "9": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
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
            line: 49,
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
            line: 16,
            column: 7
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        loc: {
          start: {
            line: 29,
            column: 13
          },
          end: {
            line: 33,
            column: 5
          }
        },
        line: 29
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
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "283ebc717a7fa2b3fd5d39b6ad12680be08dc8a2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1nqrezcbw6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1nqrezcbw6();
const {
  Model
} = (cov_1nqrezcbw6().s[0]++, require("sequelize"));
cov_1nqrezcbw6().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1nqrezcbw6().f[0]++;

  class assignment_scores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      s_classes,
      assignments,
      score_flags,
      score_types
    }) {
      cov_1nqrezcbw6().f[1]++;
      cov_1nqrezcbw6().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "studentId",
        as: "student"
      });
      cov_1nqrezcbw6().s[3]++;
      this.belongsTo(s_classes, {
        foreignKey: "classId",
        as: "class"
      });
      cov_1nqrezcbw6().s[4]++;
      this.belongsTo(score_flags, {
        foreignKey: "flagId",
        as: "flag"
      });
      cov_1nqrezcbw6().s[5]++;
      this.belongsTo(score_types, {
        foreignKey: "scoreTypeId",
        as: "scoreType"
      });
      cov_1nqrezcbw6().s[6]++;
      this.belongsTo(assignments, {
        foreignKey: "assignmentId",
        as: "assignment"
      });
    }

    toJSON() {
      cov_1nqrezcbw6().f[2]++;
      cov_1nqrezcbw6().s[7]++;
      return { ...this.get()
      };
    }

  }

  cov_1nqrezcbw6().s[8]++;
  assignment_scores.init({
    takeAssignment: DataTypes.BOOLEAN,
    score: DataTypes.STRING,
    comment: DataTypes.TEXT,
    isMarked: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "assignment_scores"
  });
  cov_1nqrezcbw6().s[9]++;
  return assignment_scores;
};