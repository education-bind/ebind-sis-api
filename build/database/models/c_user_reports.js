"use strict";

function cov_2fwqtgyj7b() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_user_reports.js";
  var hash = "a079f09817c960be1ec7380a1a0d90ffb17b3426";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_user_reports.js",
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
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 8
        }
      },
      "5": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 33,
          column: 4
        }
      },
      "6": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 24
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
            column: 36
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 17
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
    hash: "a079f09817c960be1ec7380a1a0d90ffb17b3426"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2fwqtgyj7b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2fwqtgyj7b();
const {
  Model
} = (cov_2fwqtgyj7b().s[0]++, require("sequelize"));
cov_2fwqtgyj7b().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_2fwqtgyj7b().f[0]++;

  class c_user_reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users
    }) {
      cov_2fwqtgyj7b().f[1]++;
      cov_2fwqtgyj7b().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "userId",
        as: "user"
      });
      cov_2fwqtgyj7b().s[3]++;
      this.belongsTo(edu_users, {
        foreignKey: "reportedUserId",
        as: "reportedUser"
      });
    }

    toJSON() {
      cov_2fwqtgyj7b().f[2]++;
      cov_2fwqtgyj7b().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_2fwqtgyj7b().s[5]++;
  c_user_reports.init({
    description: DataTypes.TEXT,
    reviewed: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "c_user_reports"
  });
  cov_2fwqtgyj7b().s[6]++;
  return c_user_reports;
};