'use strict';

function cov_gl4sz874u() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_infos.js";
  var hash = "4b0e76dec4d1b2b8aa50b268c66b8ff20b940e36";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\student_infos.js",
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
          line: 39,
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
          column: 79
        }
      },
      "3": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 70
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
          line: 37,
          column: 5
        }
      },
      "6": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
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
            line: 39,
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
            column: 45
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
    hash: "4b0e76dec4d1b2b8aa50b268c66b8ff20b940e36"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_gl4sz874u = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_gl4sz874u();
const {
  Model
} = (cov_gl4sz874u().s[0]++, require('sequelize'));
cov_gl4sz874u().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_gl4sz874u().f[0]++;

  class student_infos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      schools,
      edu_users
    }) {
      cov_gl4sz874u().f[1]++;
      cov_gl4sz874u().s[2]++;
      this.belongsTo(schools, {
        foreignKey: 'schoolId',
        as: 'currentSchool'
      });
      cov_gl4sz874u().s[3]++;
      this.belongsTo(edu_users, {
        foreignKey: 'userId',
        as: 'user'
      });
    }

    toJSON() {
      cov_gl4sz874u().f[2]++;
      cov_gl4sz874u().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_gl4sz874u().s[5]++;
  student_infos.init({
    fatherPhone: DataTypes.INTEGER,
    matherPhone: DataTypes.INTEGER,
    fatherName: DataTypes.STRING,
    matherName: DataTypes.STRING,
    homeAddress: DataTypes.STRING,
    identityNumber: DataTypes.STRING,
    identityNumberType: DataTypes.STRING,
    bloodType: DataTypes.STRING,
    countryOfBirth: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    studentNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student_infos'
  });
  cov_gl4sz874u().s[6]++;
  return student_infos;
};