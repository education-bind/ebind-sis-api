"use strict";

function cov_1wtmvkokmf() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_transfers.js";
  var hash = "ee2ec1805037370b80b5381e7ff8143a79aa0cb2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_transfers.js",
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
          line: 36,
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
          line: 12,
          column: 72
        }
      },
      "4": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 80
        }
      },
      "5": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 76
        }
      },
      "6": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 19,
          column: 8
        }
      },
      "7": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 34,
          column: 4
        }
      },
      "8": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
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
            line: 36,
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
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ee2ec1805037370b80b5381e7ff8143a79aa0cb2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1wtmvkokmf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1wtmvkokmf();
const {
  Model
} = (cov_1wtmvkokmf().s[0]++, require("sequelize"));
cov_1wtmvkokmf().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1wtmvkokmf().f[0]++;

  class student_transfers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools
    }) {
      cov_1wtmvkokmf().f[1]++;
      cov_1wtmvkokmf().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "studentId",
        as: "student"
      });
      cov_1wtmvkokmf().s[3]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
      cov_1wtmvkokmf().s[4]++;
      this.belongsTo(schools, {
        foreignKey: "fromSchoolId",
        as: "fromSchool"
      });
      cov_1wtmvkokmf().s[5]++;
      this.belongsTo(schools, {
        foreignKey: "toSchoolId",
        as: "toSchool"
      });
    }

    toJSON() {
      cov_1wtmvkokmf().f[2]++;
      cov_1wtmvkokmf().s[6]++;
      return { ...this.get()
      };
    }

  }

  cov_1wtmvkokmf().s[7]++;
  student_transfers.init({
    studentStatus: DataTypes.STRING,
    description: DataTypes.TEXT,
    schoolStatus: DataTypes.STRING,
    transferType: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "student_transfers"
  });
  cov_1wtmvkokmf().s[8]++;
  return student_transfers;
};