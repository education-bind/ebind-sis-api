"use strict";

function cov_iv9pskcdx() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_class_origins.js";
  var hash = "4a4ee51bc15c1399b682133e4e8c40a64843784f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_class_origins.js",
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
          column: 72
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
          line: 28,
          column: 4
        }
      },
      "5": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 25
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
            column: 34
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
    hash: "4a4ee51bc15c1399b682133e4e8c40a64843784f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_iv9pskcdx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_iv9pskcdx();
const {
  Model
} = (cov_iv9pskcdx().s[0]++, require("sequelize"));
cov_iv9pskcdx().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_iv9pskcdx().f[0]++;

  class s_class_origins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      schools
    }) {
      cov_iv9pskcdx().f[1]++;
      cov_iv9pskcdx().s[2]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
    }

    toJSON() {
      cov_iv9pskcdx().f[2]++;
      cov_iv9pskcdx().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_iv9pskcdx().s[4]++;
  s_class_origins.init({
    classOriginGroupId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "s_class_origins"
  });
  cov_iv9pskcdx().s[5]++;
  return s_class_origins;
};