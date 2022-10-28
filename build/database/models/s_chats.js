"use strict";

function cov_asih8nfe1() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_chats.js";
  var hash = "444e5f22b12edc3a484caec49e993faf735995de";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_chats.js",
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
          line: 40,
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
          column: 78
        }
      },
      "3": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 74
        }
      },
      "4": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 72
        }
      },
      "5": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 17,
          column: 9
        }
      },
      "6": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 22,
          column: 8
        }
      },
      "7": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 38,
          column: 4
        }
      },
      "8": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
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
            line: 40,
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
            column: 54
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 13
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 19
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
    hash: "444e5f22b12edc3a484caec49e993faf735995de"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_asih8nfe1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_asih8nfe1();
const {
  Model
} = (cov_asih8nfe1().s[0]++, require("sequelize"));
cov_asih8nfe1().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_asih8nfe1().f[0]++;

  class s_chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools,
      s_chats
    }) {
      cov_asih8nfe1().f[1]++;
      cov_asih8nfe1().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "userFromId",
        as: "userFrom"
      });
      cov_asih8nfe1().s[3]++;
      this.belongsTo(edu_users, {
        foreignKey: "userToId",
        as: "userTo"
      });
      cov_asih8nfe1().s[4]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
      cov_asih8nfe1().s[5]++;
      this.belongsTo(s_chats, {
        foreignKey: "messagReplyId",
        as: "messagReply"
      });
    }

    toJSON() {
      cov_asih8nfe1().f[2]++;
      cov_asih8nfe1().s[6]++;
      return { ...this.get()
      };
    }

  }

  cov_asih8nfe1().s[7]++;
  s_chats.init({
    messageType: DataTypes.STRING,
    date: DataTypes.DATE,
    file: DataTypes.TEXT,
    fileType: DataTypes.STRING,
    textMessage: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "s_chats"
  });
  cov_asih8nfe1().s[8]++;
  return s_chats;
};