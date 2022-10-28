'use strict';

function cov_1c65itnkrq() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_calender_events.js";
  var hash = "87a9f3bb6dd2b2205f4abc058a3768db3139f350";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_calender_events.js",
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
          line: 37,
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
          column: 70
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
          line: 35,
          column: 5
        }
      },
      "6": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
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
            line: 37,
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
    hash: "87a9f3bb6dd2b2205f4abc058a3768db3139f350"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1c65itnkrq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1c65itnkrq();
const {
  Model
} = (cov_1c65itnkrq().s[0]++, require('sequelize'));
cov_1c65itnkrq().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1c65itnkrq().f[0]++;

  class s_calender_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools
    }) {
      cov_1c65itnkrq().f[1]++;
      cov_1c65itnkrq().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: 'userId',
        as: 'user'
      });
      cov_1c65itnkrq().s[3]++;
      this.belongsTo(schools, {
        foreignKey: 'schoolId',
        as: 'school'
      });
    }

    toJSON() {
      cov_1c65itnkrq().f[2]++;
      cov_1c65itnkrq().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_1c65itnkrq().s[5]++;
  s_calender_events.init({
    active: DataTypes.BOOLEAN,
    summary: DataTypes.TEXT,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    startDateTime: DataTypes.STRING,
    endDateTime: DataTypes.STRING,
    timeZone: DataTypes.TEXT,
    createdBy: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 's_calender_events'
  });
  cov_1c65itnkrq().s[6]++;
  return s_calender_events;
};