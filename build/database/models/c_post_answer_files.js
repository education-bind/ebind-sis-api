"use strict";

function cov_s7zpgbz7h() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_post_answer_files.js";
  var hash = "159e03bf5b0a131e26b34d9cc7590efcd9b8f004";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_post_answer_files.js",
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
          line: 14,
          column: 9
        }
      },
      "3": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 19,
          column: 8
        }
      },
      "4": {
        start: {
          line: 22,
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
          column: 29
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
            column: 41
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 10
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
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "159e03bf5b0a131e26b34d9cc7590efcd9b8f004"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_s7zpgbz7h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_s7zpgbz7h();
const {
  Model
} = (cov_s7zpgbz7h().s[0]++, require("sequelize"));
cov_s7zpgbz7h().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_s7zpgbz7h().f[0]++;

  class c_post_answer_files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      c_post_answers
    }) {
      cov_s7zpgbz7h().f[1]++;
      cov_s7zpgbz7h().s[2]++;
      this.belongsTo(c_post_answers, {
        foreignKey: "cPostAnswerId",
        as: "cPostAnswer"
      });
    }

    toJSON() {
      cov_s7zpgbz7h().f[2]++;
      cov_s7zpgbz7h().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_s7zpgbz7h().s[4]++;
  c_post_answer_files.init({
    file: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "c_post_answer_files"
  });
  cov_s7zpgbz7h().s[5]++;
  return c_post_answer_files;
};