'use strict';

function cov_17tn2r64bi() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_plans.js";
  var hash = "2666ddd58beeb40195e0bd2424c9e16f4434a256";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\c_room_plans.js",
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
          line: 26,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "3": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 22
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
            line: 26,
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
    hash: "2666ddd58beeb40195e0bd2424c9e16f4434a256"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17tn2r64bi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_17tn2r64bi();
const {
  Model
} = (cov_17tn2r64bi().s[0]++, require('sequelize'));
cov_17tn2r64bi().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_17tn2r64bi().f[0]++;

  class c_room_plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here

      cov_17tn2r64bi().f[1]++;
    }

  }

  cov_17tn2r64bi().s[2]++;
  c_room_plans.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_room_plans'
  });
  cov_17tn2r64bi().s[3]++;
  return c_room_plans;
};