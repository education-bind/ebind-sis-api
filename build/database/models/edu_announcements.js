'use strict';

function cov_8u61x8wfp() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_announcements.js";
  var hash = "3855badf0ac5f34d8f9782af991578d6bef3b085";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_announcements.js",
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
          line: 27,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "3": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
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
            line: 27,
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
            column: 29
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3855badf0ac5f34d8f9782af991578d6bef3b085"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_8u61x8wfp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_8u61x8wfp();
const {
  Model
} = (cov_8u61x8wfp().s[0]++, require('sequelize'));
cov_8u61x8wfp().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_8u61x8wfp().f[0]++;

  class edu_announcements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here

      cov_8u61x8wfp().f[1]++;
    }

  }

  cov_8u61x8wfp().s[2]++;
  edu_announcements.init({
    title: DataTypes.STRING,
    message: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
    link: DataTypes.TEXT,
    publish: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_announcements'
  });
  cov_8u61x8wfp().s[3]++;
  return edu_announcements;
};