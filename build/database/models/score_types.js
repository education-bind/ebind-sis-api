'use strict';

function cov_190kz13q8b() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\score_types.js";
  var hash = "b882677d5ac39084b62471a422ac87c3457675a5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\score_types.js",
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
          line: 24,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "3": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 21
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
            line: 24,
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
    hash: "b882677d5ac39084b62471a422ac87c3457675a5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_190kz13q8b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_190kz13q8b();
const {
  Model
} = (cov_190kz13q8b().s[0]++, require('sequelize'));
cov_190kz13q8b().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_190kz13q8b().f[0]++;

  class score_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here

      cov_190kz13q8b().f[1]++;
    }

  }

  cov_190kz13q8b().s[2]++;
  score_types.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'score_types'
  });
  cov_190kz13q8b().s[3]++;
  return score_types;
};