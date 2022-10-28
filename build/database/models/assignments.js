"use strict";

function cov_2pu26eztxo() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\assignments.js";
  var hash = "ddbab3c708664d113f4e32f184f3f832fd7663c7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\assignments.js",
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
          line: 48,
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
          line: 19,
          column: 6
        },
        end: {
          line: 22,
          column: 9
        }
      },
      "5": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 27,
          column: 8
        }
      },
      "6": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 46,
          column: 4
        }
      },
      "7": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 21
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
            line: 48,
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
            column: 76
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        loc: {
          start: {
            line: 24,
            column: 13
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 24
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
    hash: "ddbab3c708664d113f4e32f184f3f832fd7663c7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pu26eztxo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2pu26eztxo();
const {
  Model
} = (cov_2pu26eztxo().s[0]++, require("sequelize"));
cov_2pu26eztxo().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_2pu26eztxo().f[0]++;

  class assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      assignment_categories,
      score_types,
      e_assignments
    }) {
      cov_2pu26eztxo().f[1]++;
      cov_2pu26eztxo().s[2]++;
      this.belongsTo(assignment_categories, {
        foreignKey: "assignmentCategoryId",
        as: "assignmentCategory"
      });
      cov_2pu26eztxo().s[3]++;
      this.belongsTo(score_types, {
        foreignKey: "scoreTypeId",
        as: "scoreType"
      });
      cov_2pu26eztxo().s[4]++;
      this.belongsTo(e_assignments, {
        foreignKey: "eAssignmentId",
        as: "eLearningAssignment"
      });
    }

    toJSON() {
      cov_2pu26eztxo().f[2]++;
      cov_2pu26eztxo().s[5]++;
      return { ...this.get()
      };
    }

  }

  cov_2pu26eztxo().s[6]++;
  assignments.init({
    name: DataTypes.STRING,
    scoreEntryPoints: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    publishScoreDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    moduleId: DataTypes.INTEGER,
    moduleType: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    assignmentType: DataTypes.STRING
  }, {
    sequelize,
    modelName: "assignments"
  });
  cov_2pu26eztxo().s[7]++;
  return assignments;
};