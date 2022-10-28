"use strict";

function cov_1p73i5l1ha() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_types.js";
  var hash = "7d7b266393ab7f0f4e4711f71528a25249615e7b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_types.js",
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
          line: 34,
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
          line: 17,
          column: 6
        },
        end: {
          line: 19,
          column: 8
        }
      },
      "4": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 32,
          column: 4
        }
      },
      "5": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 22
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
            line: 34,
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
            column: 39
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 13
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 16
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
    hash: "7d7b266393ab7f0f4e4711f71528a25249615e7b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1p73i5l1ha = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1p73i5l1ha();
const {
  Model
} = (cov_1p73i5l1ha().s[0]++, require("sequelize"));
cov_1p73i5l1ha().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1p73i5l1ha().f[0]++;

  class c_room_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      c_room_plans
    }) {
      cov_1p73i5l1ha().f[1]++;
      cov_1p73i5l1ha().s[2]++;
      this.belongsTo(c_room_plans, {
        foreignKey: "cRoomPlanId",
        as: "cRoomPlan"
      });
    }

    toJSON() {
      cov_1p73i5l1ha().f[2]++;
      cov_1p73i5l1ha().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_1p73i5l1ha().s[4]++;
  c_room_types.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "c_room_types"
  });
  cov_1p73i5l1ha().s[5]++;
  return c_room_types;
};