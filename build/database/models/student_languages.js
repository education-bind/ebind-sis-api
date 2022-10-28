"use strict";

function cov_1fnif223r5() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_languages.js";
  var hash = "58ced940e0425fdb2dd1e444b30cffa694b48962";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_languages.js",
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
          line: 34,
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
          column: 76
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
          line: 32,
          column: 4
        }
      },
      "6": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 27
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
            line: 34,
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
            column: 51
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
    hash: "58ced940e0425fdb2dd1e444b30cffa694b48962"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fnif223r5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1fnif223r5();
const {
  Model
} = (cov_1fnif223r5().s[0]++, require("sequelize"));
cov_1fnif223r5().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1fnif223r5().f[0]++;

  class student_languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      edu_languages
    }) {
      cov_1fnif223r5().f[1]++;
      cov_1fnif223r5().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "studentId",
        as: "student"
      });
      cov_1fnif223r5().s[3]++;
      this.belongsTo(edu_languages, {
        foreignKey: "eduLanguageId",
        as: "eduLanguage"
      });
    }

    toJSON() {
      cov_1fnif223r5().f[2]++;
      cov_1fnif223r5().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_1fnif223r5().s[5]++;
  student_languages.init({
    type: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "student_languages"
  });
  cov_1fnif223r5().s[6]++;
  return student_languages;
};