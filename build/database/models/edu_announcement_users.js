'use strict';

function cov_2l2i05e5wh() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_announcement_users.js";
  var hash = "54dc6504e31858390ba345ae5a4f2c9151ad864a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_announcement_users.js",
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
          line: 30,
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
          column: 70
        }
      },
      "3": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 94
        }
      },
      "4": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 19,
          column: 8
        }
      },
      "5": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "6": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 32
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
            line: 30,
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
            column: 55
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 12
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
    hash: "54dc6504e31858390ba345ae5a4f2c9151ad864a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2l2i05e5wh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2l2i05e5wh();
const {
  Model
} = (cov_2l2i05e5wh().s[0]++, require('sequelize'));
cov_2l2i05e5wh().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_2l2i05e5wh().f[0]++;

  class edu_announcement_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      edu_announcements
    }) {
      cov_2l2i05e5wh().f[1]++;
      cov_2l2i05e5wh().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: 'userId',
        as: 'user'
      });
      cov_2l2i05e5wh().s[3]++;
      this.belongsTo(edu_announcements, {
        foreignKey: 'announcementId',
        as: 'announcement'
      });
    }

    toJSON() {
      cov_2l2i05e5wh().f[2]++;
      cov_2l2i05e5wh().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_2l2i05e5wh().s[5]++;
  edu_announcement_users.init({
    active: DataTypes.BOOLEAN,
    isRead: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_announcement_users'
  });
  cov_2l2i05e5wh().s[6]++;
  return edu_announcement_users;
};