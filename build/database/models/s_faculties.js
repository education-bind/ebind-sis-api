"use strict";

function cov_1usspc1ae8() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_faculties.js";
  var hash = "998c813507258ff9ac93a2b183bf4f226aa757d2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_faculties.js",
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
          line: 14,
          column: 9
        }
      },
      "3": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 72
        }
      },
      "4": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 8
        }
      },
      "5": {
        start: {
          line: 23,
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
          column: 21
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
            column: 49
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 10
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "998c813507258ff9ac93a2b183bf4f226aa757d2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1usspc1ae8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1usspc1ae8();
const {
  Model
} = (cov_1usspc1ae8().s[0]++, require("sequelize"));
cov_1usspc1ae8().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1usspc1ae8().f[0]++;

  class s_faculties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      schools,
      edu_faculties
    }) {
      cov_1usspc1ae8().f[1]++;
      cov_1usspc1ae8().s[2]++;
      this.belongsTo(edu_faculties, {
        foreignKey: "educationFaciltyId",
        as: "educationFacilty"
      });
      cov_1usspc1ae8().s[3]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
    }

    toJSON() {
      cov_1usspc1ae8().f[2]++;
      cov_1usspc1ae8().s[4]++;
      return { ...this.get()
      };
    }

  }

  cov_1usspc1ae8().s[5]++;
  s_faculties.init({
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "s_faculties"
  });
  cov_1usspc1ae8().s[6]++;
  return s_faculties;
};