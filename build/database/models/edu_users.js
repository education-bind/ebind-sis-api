'use strict';

function cov_2ld1pl5txl() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_users.js";
  var hash = "316d111b3b01b0cc606b0e24d1f1bb8f65dd9b22";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_users.js",
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
          line: 63,
          column: 2
        }
      },
      "2": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 83
        }
      },
      "3": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 94
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
          line: 61,
          column: 5
        }
      },
      "6": {
        start: {
          line: 62,
          column: 2
        },
        end: {
          line: 62,
          column: 19
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
            line: 63,
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
            column: 52
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "316d111b3b01b0cc606b0e24d1f1bb8f65dd9b22"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ld1pl5txl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ld1pl5txl();
const {
  Model
} = (cov_2ld1pl5txl().s[0]++, require('sequelize'));
cov_2ld1pl5txl().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_2ld1pl5txl().f[0]++;

  class edu_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_user_types,
      countries
    }) {
      cov_2ld1pl5txl().f[1]++;
      cov_2ld1pl5txl().s[2]++;
      this.belongsTo(edu_user_types, {
        foreignKey: 'userTypeId',
        as: 'userType'
      });
      cov_2ld1pl5txl().s[3]++;
      this.belongsTo(countries, {
        foreignKey: 'communityCountryId',
        as: 'communityCountry'
      });
    }

    toJSON() {
      cov_2ld1pl5txl().f[2]++;
      cov_2ld1pl5txl().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_2ld1pl5txl().s[5]++;
  edu_users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    userName: {
      type: DataTypes.STRING,
      unique: true
    },
    mailingAddress: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true
    },
    profileImage: DataTypes.TEXT,
    gender: DataTypes.ENUM('male', 'female', ''),
    birthDate: DataTypes.DATE,
    password: DataTypes.STRING,
    passwordChangedAt: DataTypes.DATE,
    passwordResetToken: DataTypes.TEXT,
    passwordResetExpires: DataTypes.STRING,
    twoFA: DataTypes.BOOLEAN,
    fixedNavBar: DataTypes.BOOLEAN,
    darkMode: DataTypes.BOOLEAN,
    miniSidenav: DataTypes.BOOLEAN,
    sidenavColor: DataTypes.STRING,
    sidenavType: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_users'
  });
  cov_2ld1pl5txl().s[6]++;
  return edu_users;
};