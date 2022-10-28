"use strict";

function cov_1fic5ianau() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_settings.js";
  var hash = "18fd1f6b54d645372e3f4d700ab52928b6d54c7b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_settings.js",
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
          line: 35,
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
          line: 14,
          column: 6
        },
        end: {
          line: 16,
          column: 8
        }
      },
      "4": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 33,
          column: 4
        }
      },
      "5": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 25
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
            line: 35,
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
            column: 34
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 13
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
    hash: "18fd1f6b54d645372e3f4d700ab52928b6d54c7b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fic5ianau = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1fic5ianau();
const {
  Model
} = (cov_1fic5ianau().s[0]++, require("sequelize"));
cov_1fic5ianau().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1fic5ianau().f[0]++;

  class c_room_settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      c_rooms
    }) {
      cov_1fic5ianau().f[1]++;
      cov_1fic5ianau().s[2]++;
      this.belongsTo(c_rooms, {
        foreignKey: "cRoomId",
        as: "cRoom"
      });
    }

    toJSON() {
      cov_1fic5ianau().f[2]++;
      cov_1fic5ianau().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_1fic5ianau().s[4]++;
  c_room_settings.init({
    userLimit: DataTypes.INTEGER,
    locked: DataTypes.BOOLEAN,
    invite: DataTypes.BOOLEAN,
    posting: DataTypes.BOOLEAN,
    hidden: DataTypes.BOOLEAN,
    color: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "c_room_settings"
  });
  cov_1fic5ianau().s[5]++;
  return c_room_settings;
};