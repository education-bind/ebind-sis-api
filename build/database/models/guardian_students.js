'use strict';

function cov_1t1z4lgx3x() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\guardian_students.js";
  var hash = "7a84440886a4c03fc5546bca6cc2c8b46dc2b01c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\guardian_students.js",
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
          line: 31,
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
          column: 78
        }
      },
      "3": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 76
        }
      },
      "4": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 107
        }
      },
      "5": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 8
        }
      },
      "6": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "7": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 27
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
            line: 31,
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
            column: 60
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
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7a84440886a4c03fc5546bca6cc2c8b46dc2b01c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1t1z4lgx3x = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1t1z4lgx3x();
const {
  Model
} = (cov_1t1z4lgx3x().s[0]++, require('sequelize'));
cov_1t1z4lgx3x().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1t1z4lgx3x().f[0]++;

  class guardian_students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      guardian_relationships
    }) {
      cov_1t1z4lgx3x().f[1]++;
      cov_1t1z4lgx3x().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: 'guardianId',
        as: 'guardian'
      });
      cov_1t1z4lgx3x().s[3]++;
      this.belongsTo(edu_users, {
        foreignKey: 'studentId',
        as: 'student'
      });
      cov_1t1z4lgx3x().s[4]++;
      this.belongsTo(guardian_relationships, {
        foreignKey: 'guardianRelationshipId',
        as: 'relationship'
      });
    }

    toJSON() {
      cov_1t1z4lgx3x().f[2]++;
      cov_1t1z4lgx3x().s[5]++;
      return { ...this.get()
      };
    }

  }

  cov_1t1z4lgx3x().s[6]++;
  guardian_students.init({
    liveWith: DataTypes.BOOLEAN,
    schoolPickup: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'guardian_students'
  });
  cov_1t1z4lgx3x().s[7]++;
  return guardian_students;
};