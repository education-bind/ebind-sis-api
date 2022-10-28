"use strict";

function cov_tstot0dwu() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_class_modules.js";
  var hash = "6bcd8ac4dacf3e75562349541a842bd63d7b80b4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_class_modules.js",
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
          column: 78
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
          line: 15,
          column: 6
        },
        end: {
          line: 17,
          column: 8
        }
      },
      "5": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 31,
          column: 4
        }
      },
      "6": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 25
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
            column: 45
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        loc: {
          start: {
            line: 14,
            column: 13
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 14
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
    hash: "6bcd8ac4dacf3e75562349541a842bd63d7b80b4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_tstot0dwu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_tstot0dwu();
const {
  Model
} = (cov_tstot0dwu().s[0]++, require("sequelize"));
cov_tstot0dwu().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_tstot0dwu().f[0]++;

  class s_class_modules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      s_classes,
      schools
    }) {
      cov_tstot0dwu().f[1]++;
      cov_tstot0dwu().s[2]++;
      this.belongsTo(s_classes, {
        foreignKey: "schoolClassId",
        as: "class"
      });
      cov_tstot0dwu().s[3]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
    }

    toJSON() {
      cov_tstot0dwu().f[2]++;
      cov_tstot0dwu().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_tstot0dwu().s[5]++;
  s_class_modules.init({
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "s_class_modules"
  });
  cov_tstot0dwu().s[6]++;
  return s_class_modules;
};