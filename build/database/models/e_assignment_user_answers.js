"use strict";

function cov_tu9g26jad() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_assignment_user_answers.js";
  var hash = "b86bca944cf204beb8eb26b8088af6de0881179a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_assignment_user_answers.js",
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
          line: 43,
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
          column: 70
        }
      },
      "3": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 20,
          column: 9
        }
      },
      "4": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 24,
          column: 9
        }
      },
      "5": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 76
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
          line: 41,
          column: 4
        }
      },
      "8": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 35
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
            line: 43,
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
    hash: "b86bca944cf204beb8eb26b8088af6de0881179a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_tu9g26jad = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_tu9g26jad();
const {
  Model
} = (cov_tu9g26jad().s[0]++, require("sequelize"));
cov_tu9g26jad().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_tu9g26jad().f[0]++;

  class e_assignment_user_answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      e_assignments,
      e_assignment_attempts,
      e_answers
    }) {
      cov_tu9g26jad().f[1]++;
      cov_tu9g26jad().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "userId",
        as: "user"
      });
      cov_tu9g26jad().s[3]++;
      this.belongsTo(e_assignments, {
        foreignKey: "eAssignmentId",
        as: "eLearningAssignment"
      });
      cov_tu9g26jad().s[4]++;
      this.belongsTo(e_assignment_attempts, {
        foreignKey: "attemptId",
        as: "attempts"
      });
      cov_tu9g26jad().s[5]++;
      this.belongsTo(e_answers, {
        foreignKey: "eAnswerId",
        as: "eAnswer"
      });
    }

    toJSON() {
      cov_tu9g26jad().f[2]++;
      cov_tu9g26jad().s[6]++;
      return { ...this.get()
      };
    }

  }

  cov_tu9g26jad().s[7]++;
  e_assignment_user_answers.init({
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "e_assignment_user_answers"
  });
  cov_tu9g26jad().s[8]++;
  return e_assignment_user_answers;
};