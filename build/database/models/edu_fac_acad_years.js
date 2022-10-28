'use strict';

function cov_1a2lzf91gc() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_fac_acad_years.js";
  var hash = "cd9cba7977261270901e78bbd6ab71289a8ef892";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_fac_acad_years.js",
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
          line: 29,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "3": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 28
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
            line: 29,
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
    hash: "cd9cba7977261270901e78bbd6ab71289a8ef892"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1a2lzf91gc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1a2lzf91gc();
const {
  Model
} = (cov_1a2lzf91gc().s[0]++, require('sequelize'));
cov_1a2lzf91gc().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1a2lzf91gc().f[0]++;

  class edu_fac_acad_years extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here

      cov_1a2lzf91gc().f[1]++;
    }

  }

  cov_1a2lzf91gc().s[2]++;
  edu_fac_acad_years.init({
    eduFacultyId: DataTypes.INTEGER,
    eduFacClassId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    isValid: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_fac_acad_years'
  });
  cov_1a2lzf91gc().s[3]++;
  return edu_fac_acad_years;
};