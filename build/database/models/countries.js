"use strict";

function cov_1uzdw6twrw() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\countries.js";
  var hash = "36f34c3e4c2d748a2d29a8a166912bef3f3d7db7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\countries.js",
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
          line: 39,
          column: 2
        }
      },
      "2": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 37,
          column: 4
        }
      },
      "3": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 19
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
            line: 39,
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
            column: 29
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
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
    hash: "36f34c3e4c2d748a2d29a8a166912bef3f3d7db7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1uzdw6twrw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1uzdw6twrw();
const {
  Model
} = (cov_1uzdw6twrw().s[0]++, require("sequelize"));
cov_1uzdw6twrw().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1uzdw6twrw().f[0]++;

  class countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here

      cov_1uzdw6twrw().f[1]++;
    }

  }

  cov_1uzdw6twrw().s[2]++;
  countries.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      msg: "Country name already exist"
    },
    active: DataTypes.BOOLEAN,
    code: {
      type: DataTypes.STRING,
      unique: true
    },
    extension: {
      type: DataTypes.STRING,
      unique: true
    },
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: "countries"
  });
  cov_1uzdw6twrw().s[3]++;
  return countries;
};