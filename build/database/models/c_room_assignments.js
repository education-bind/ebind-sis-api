"use strict";

function cov_bsioxtphs() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_assignments.js";
  var hash = "79699828c9b176f063688aa9c4b604fce6de38ae";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_assignments.js",
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
          line: 41,
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
          column: 70
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
          line: 39,
          column: 4
        }
      },
      "7": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 28
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
            line: 41,
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
            column: 62
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
    hash: "79699828c9b176f063688aa9c4b604fce6de38ae"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_bsioxtphs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_bsioxtphs();
const {
  Model
} = (cov_bsioxtphs().s[0]++, require("sequelize"));
cov_bsioxtphs().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_bsioxtphs().f[0]++;

  class c_room_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      c_rooms,
      e_assignments,
      score_types
    }) {
      cov_bsioxtphs().f[1]++;
      cov_bsioxtphs().s[2]++;
      this.belongsTo(c_rooms, {
        foreignKey: "cRoomId",
        as: "cRoom"
      });
      cov_bsioxtphs().s[3]++;
      this.belongsTo(e_assignments, {
        foreignKey: "eAssignmentId",
        as: "eLearningAssignment"
      });
      cov_bsioxtphs().s[4]++;
      this.belongsTo(score_types, {
        foreignKey: "scoreTypeId",
        as: "scoreType"
      });
    }

    toJSON() {
      cov_bsioxtphs().f[2]++;
      cov_bsioxtphs().s[5]++;
      return { ...this.get()
      };
    }

  }

  cov_bsioxtphs().s[6]++;
  c_room_assignments.init({
    name: DataTypes.STRING,
    scoreEntryPoints: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    publishScoreDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "c_room_assignments"
  });
  cov_bsioxtphs().s[7]++;
  return c_room_assignments;
};