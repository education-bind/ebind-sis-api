"use strict";

function cov_17swiv19uv() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_admin_user_infos.js";
  var hash = "69c0ca984dc6ef9192553dcfb68d0322b7bb86ea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_admin_user_infos.js",
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
          line: 33,
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
          line: 31,
          column: 4
        }
      },
      "5": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 30
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
            line: 33,
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
    hash: "69c0ca984dc6ef9192553dcfb68d0322b7bb86ea"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17swiv19uv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_17swiv19uv();
const {
  Model
} = (cov_17swiv19uv().s[0]++, require("sequelize"));
cov_17swiv19uv().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_17swiv19uv().f[0]++;

  class edu_admin_user_infos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users
    }) {
      cov_17swiv19uv().f[1]++;
      cov_17swiv19uv().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "userId",
        as: "user"
      });
    }

    toJSON() {
      cov_17swiv19uv().f[2]++;
      cov_17swiv19uv().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_17swiv19uv().s[4]++;
  edu_admin_user_infos.init({
    identityNumber: DataTypes.STRING,
    role: DataTypes.STRING,
    identityNumberType: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN,
    verificationToken: DataTypes.TEXT
  }, {
    sequelize,
    modelName: "edu_admin_user_infos"
  });
  cov_17swiv19uv().s[5]++;
  return edu_admin_user_infos;
};