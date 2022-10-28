'use strict';

function cov_1qifpi3bj0() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_plan_options.js";
  var hash = "844dc6187eea520942a71cc12798ac7fdfb1ca3e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_plan_options.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 24
        }
      },
      "1": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 29,
          column: 2
        }
      },
      "2": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 91
        }
      },
      "3": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 18,
          column: 8
        }
      },
      "4": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "5": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 5,
            column: 18
          }
        },
        loc: {
          start: {
            line: 5,
            column: 43
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 39
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
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
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "844dc6187eea520942a71cc12798ac7fdfb1ca3e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1qifpi3bj0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1qifpi3bj0();
const {
  Model
} = (cov_1qifpi3bj0().s[0]++, require('sequelize'));
cov_1qifpi3bj0().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1qifpi3bj0().f[0]++;

  class c_room_plan_options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      c_room_plans
    }) {
      cov_1qifpi3bj0().f[1]++;
      cov_1qifpi3bj0().s[2]++;
      this.belongsTo(c_room_plans, {
        foreignKey: 'cRoomPlanId',
        as: 'communityRoomPlan'
      });
    }

    toJSON() {
      cov_1qifpi3bj0().f[2]++;
      cov_1qifpi3bj0().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_1qifpi3bj0().s[4]++;
  c_room_plan_options.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_room_plan_options'
  });
  cov_1qifpi3bj0().s[5]++;
  return c_room_plan_options;
};