'use strict';

function cov_yw70tt46h() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_assignments.js";
  var hash = "22c04e89e04d6e6b19c3d3f400473d2227e0cdf9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_assignments.js",
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
          line: 33,
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
          column: 72
        }
      },
      "3": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 18,
          column: 8
        }
      },
      "4": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "5": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 23
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
            line: 33,
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
            column: 36
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 15
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
    hash: "22c04e89e04d6e6b19c3d3f400473d2227e0cdf9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_yw70tt46h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_yw70tt46h();
const {
  Model
} = (cov_yw70tt46h().s[0]++, require('sequelize'));
cov_yw70tt46h().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_yw70tt46h().f[0]++;

  class e_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users
    }) {
      cov_yw70tt46h().f[1]++;
      cov_yw70tt46h().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: 'ownerId',
        as: 'owner'
      });
    }

    toJSON() {
      cov_yw70tt46h().f[2]++;
      cov_yw70tt46h().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_yw70tt46h().s[4]++;
  e_assignments.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    abbreviation: DataTypes.STRING,
    duration: DataTypes.BOOLEAN,
    time: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'e_assignments'
  });
  cov_yw70tt46h().s[5]++;
  return e_assignments;
};