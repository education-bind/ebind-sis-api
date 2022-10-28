'use strict';

function cov_enz581wr() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\schools.js";
  var hash = "a1245510083c8a7b67459c7189c910e46b0b7ce5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\schools.js",
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
          line: 45,
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
          column: 76
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
          line: 43,
          column: 5
        }
      },
      "6": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 17
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
            line: 45,
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
            column: 47
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
    hash: "a1245510083c8a7b67459c7189c910e46b0b7ce5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_enz581wr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_enz581wr();
const {
  Model
} = (cov_enz581wr().s[0]++, require('sequelize'));
cov_enz581wr().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_enz581wr().f[0]++;

  class schools extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      countries
    }) {
      cov_enz581wr().f[1]++;
      cov_enz581wr().s[2]++;
      this.belongsTo(countries, {
        foreignKey: 'countryId',
        as: 'country'
      });
      cov_enz581wr().s[3]++;
      this.belongsTo(edu_users, {
        foreignKey: 'adminId',
        as: 'admin'
      });
    }

    toJSON() {
      cov_enz581wr().f[2]++;
      cov_enz581wr().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_enz581wr().s[5]++;
  schools.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      unique: true
    },
    abbreviation: DataTypes.STRING,
    regDate: DataTypes.DATE,
    logoImage: DataTypes.TEXT,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    city: DataTypes.STRING,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'schools'
  });
  cov_enz581wr().s[6]++;
  return schools;
};