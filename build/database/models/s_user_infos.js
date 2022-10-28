'use strict';

function cov_1ot4374er4() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_user_infos.js";
  var hash = "99c79e447111b70c91c4fbea8d6cbf37e008b50f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_user_infos.js",
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
          line: 34,
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
          column: 72
        }
      },
      "4": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 96
        }
      },
      "5": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 8
        }
      },
      "6": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "7": {
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
            line: 34,
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
            column: 60
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 12
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
    hash: "99c79e447111b70c91c4fbea8d6cbf37e008b50f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ot4374er4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ot4374er4();
const {
  Model
} = (cov_1ot4374er4().s[0]++, require('sequelize'));
cov_1ot4374er4().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1ot4374er4().f[0]++;

  class s_user_infos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools,
      s_user_groups
    }) {
      cov_1ot4374er4().f[1]++;
      cov_1ot4374er4().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: 'userId',
        as: 'user'
      });
      cov_1ot4374er4().s[3]++;
      this.belongsTo(schools, {
        foreignKey: 'schoolId',
        as: 'school'
      });
      cov_1ot4374er4().s[4]++;
      this.belongsTo(s_user_groups, {
        foreignKey: 'schoolUserGroupId',
        as: 'schoolUserGroup'
      });
    }

    toJSON() {
      cov_1ot4374er4().f[2]++;
      cov_1ot4374er4().s[5]++;
      return { ...this.get()
      };
    }

  }

  cov_1ot4374er4().s[6]++;
  s_user_infos.init({
    identityNumber: DataTypes.STRING,
    identityNumberType: DataTypes.STRING,
    isVerfied: DataTypes.BOOLEAN,
    verificationToken: DataTypes.TEXT,
    accountAccessToken: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 's_user_infos'
  });
  cov_1ot4374er4().s[7]++;
  return s_user_infos;
};