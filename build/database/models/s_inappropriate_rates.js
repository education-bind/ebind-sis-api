"use strict";

function cov_jbr3ueezi() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_inappropriate_rates.js";
  var hash = "40d7720320659881ccf746627432c8bcd2a519d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_inappropriate_rates.js",
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
          column: 73
        }
      },
      "3": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 76
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
          column: 31
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
    hash: "40d7720320659881ccf746627432c8bcd2a519d0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jbr3ueezi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_jbr3ueezi();
const {
  Model
} = (cov_jbr3ueezi().s[0]++, require("sequelize"));
cov_jbr3ueezi().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_jbr3ueezi().f[0]++;

  class s_inappropriate_rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      s_rates
    }) {
      cov_jbr3ueezi().f[1]++;
      cov_jbr3ueezi().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "userId",
        as: "student"
      });
      cov_jbr3ueezi().s[3]++;
      this.belongsTo(s_rates, {
        foreignKey: "sRateId",
        as: "schoolRates"
      });
    }

    toJSON() {
      cov_jbr3ueezi().f[2]++;
      cov_jbr3ueezi().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_jbr3ueezi().s[5]++;
  s_inappropriate_rates.init({
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "s_inappropriate_rates"
  });
  cov_jbr3ueezi().s[6]++;
  return s_inappropriate_rates;
};