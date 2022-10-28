"use strict";

function cov_1xdz9a1fc9() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_fac_class_groups.js";
  var hash = "f6543ce8f711197d1a991a82a772bb284ec22077";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_fac_class_groups.js",
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
          line: 34,
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
          line: 17,
          column: 6
        },
        end: {
          line: 19,
          column: 8
        }
      },
      "4": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 32,
          column: 4
        }
      },
      "5": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 30
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
            line: 34,
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
            column: 40
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 10
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
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f6543ce8f711197d1a991a82a772bb284ec22077"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1xdz9a1fc9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1xdz9a1fc9();
const {
  Model
} = (cov_1xdz9a1fc9().s[0]++, require("sequelize"));
cov_1xdz9a1fc9().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1xdz9a1fc9().f[0]++;

  class edu_fac_class_groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_faculties
    }) {
      cov_1xdz9a1fc9().f[1]++;
      cov_1xdz9a1fc9().s[2]++;
      this.belongsTo(edu_faculties, {
        foreignKey: "eduFacultyId",
        as: "educationFaculty"
      });
    }

    toJSON() {
      cov_1xdz9a1fc9().f[2]++;
      cov_1xdz9a1fc9().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_1xdz9a1fc9().s[4]++;
  edu_fac_class_groups.init({
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "edu_fac_class_groups"
  });
  cov_1xdz9a1fc9().s[5]++;
  return edu_fac_class_groups;
};