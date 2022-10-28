"use strict";

function cov_1c70r5o8sy() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_user_groups.js";
  var hash = "1f00c541c1b363c621191622ef6650394a156868";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_user_groups.js",
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
          line: 33,
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
          column: 72
        }
      },
      "3": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 16,
          column: 8
        }
      },
      "4": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 31,
          column: 4
        }
      },
      "5": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 23
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
            line: 33,
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
            column: 34
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1f00c541c1b363c621191622ef6650394a156868"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1c70r5o8sy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1c70r5o8sy();
const {
  Model
} = (cov_1c70r5o8sy().s[0]++, require("sequelize"));
cov_1c70r5o8sy().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1c70r5o8sy().f[0]++;

  class s_user_groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      schools
    }) {
      cov_1c70r5o8sy().f[1]++;
      cov_1c70r5o8sy().s[2]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
    }

    toJSON() {
      cov_1c70r5o8sy().f[2]++;
      cov_1c70r5o8sy().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_1c70r5o8sy().s[4]++;
  s_user_groups.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    abbreviation: DataTypes.STRING,
    description: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: "s_user_groups"
  });
  cov_1c70r5o8sy().s[5]++;
  return s_user_groups;
};