"use strict";

function cov_ehzn5x4bh() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_rooms.js";
  var hash = "94c9fb89b75d637734b1d0043682c530c8743d5a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_rooms.js",
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
          line: 38,
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
          line: 36,
          column: 4
        }
      },
      "7": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 17
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
            line: 38,
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
            column: 61
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
    hash: "94c9fb89b75d637734b1d0043682c530c8743d5a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ehzn5x4bh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ehzn5x4bh();
const {
  Model
} = (cov_ehzn5x4bh().s[0]++, require("sequelize"));
cov_ehzn5x4bh().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_ehzn5x4bh().f[0]++;

  class c_rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      c_room_types,
      countries
    }) {
      cov_ehzn5x4bh().f[1]++;
      cov_ehzn5x4bh().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "userId",
        as: "user"
      });
      cov_ehzn5x4bh().s[3]++;
      this.belongsTo(c_room_types, {
        foreignKey: "cRoomTypeId",
        as: "cRoomType"
      });
      cov_ehzn5x4bh().s[4]++;
      this.belongsTo(countries, {
        foreignKey: "countryId",
        as: "country"
      });
    }

    toJSON() {
      cov_ehzn5x4bh().f[2]++;
      cov_ehzn5x4bh().s[5]++;
      return { ...this.get()
      };
    }

  }

  cov_ehzn5x4bh().s[6]++;
  c_rooms.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "c_rooms"
  });
  cov_ehzn5x4bh().s[7]++;
  return c_rooms;
};