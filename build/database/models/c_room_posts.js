"use strict";

function cov_2bsdsfbr3l() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_posts.js";
  var hash = "e2b4c645b0becb3b132029e5a9da769201fbfbda";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_posts.js",
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
          line: 30,
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
          line: 12,
          column: 70
        }
      },
      "4": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 17,
          column: 8
        }
      },
      "5": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 28,
          column: 4
        }
      },
      "6": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
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
            line: 30,
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
            column: 43
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        loc: {
          start: {
            line: 14,
            column: 13
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 14
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
    hash: "e2b4c645b0becb3b132029e5a9da769201fbfbda"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2bsdsfbr3l = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2bsdsfbr3l();
const {
  Model
} = (cov_2bsdsfbr3l().s[0]++, require("sequelize"));
cov_2bsdsfbr3l().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_2bsdsfbr3l().f[0]++;

  class c_room_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      c_rooms,
      c_posts
    }) {
      cov_2bsdsfbr3l().f[1]++;
      cov_2bsdsfbr3l().s[2]++;
      this.belongsTo(c_rooms, {
        foreignKey: "cRoomId",
        as: "cRoom"
      });
      cov_2bsdsfbr3l().s[3]++;
      this.belongsTo(c_posts, {
        foreignKey: "cPostId",
        as: "cPost"
      });
    }

    toJSON() {
      cov_2bsdsfbr3l().f[2]++;
      cov_2bsdsfbr3l().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_2bsdsfbr3l().s[5]++;
  c_room_posts.init({
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "c_room_posts"
  });
  cov_2bsdsfbr3l().s[6]++;
  return c_room_posts;
};