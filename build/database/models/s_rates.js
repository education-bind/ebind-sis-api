"use strict";

function cov_1jh0oq0fpa() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_rates.js";
  var hash = "112e7d0b8edb9edd39f2e767335ceb1fb5f3b985";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_rates.js",
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
          line: 32,
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
          column: 72
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
          line: 30,
          column: 4
        }
      },
      "6": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
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
            line: 32,
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
            column: 45
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
    hash: "112e7d0b8edb9edd39f2e767335ceb1fb5f3b985"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1jh0oq0fpa = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1jh0oq0fpa();
const {
  Model
} = (cov_1jh0oq0fpa().s[0]++, require("sequelize"));
cov_1jh0oq0fpa().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1jh0oq0fpa().f[0]++;

  class s_rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools
    }) {
      cov_1jh0oq0fpa().f[1]++;
      cov_1jh0oq0fpa().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "guardianId",
        as: "guardian"
      });
      cov_1jh0oq0fpa().s[3]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
    }

    toJSON() {
      cov_1jh0oq0fpa().f[2]++;
      cov_1jh0oq0fpa().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_1jh0oq0fpa().s[5]++;
  s_rates.init({
    rate: DataTypes.INTEGER,
    review: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "s_rates"
  });
  cov_1jh0oq0fpa().s[6]++;
  return s_rates;
};