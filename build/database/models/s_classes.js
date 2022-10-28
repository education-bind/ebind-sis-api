"use strict";

function cov_1gzs1rzsfc() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_classes.js";
  var hash = "a07ea98bc4953e2a9e3b9321020c3beaa45bb9fc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_classes.js",
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
          line: 48,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "3": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 72
        }
      },
      "4": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 24,
          column: 9
        }
      },
      "5": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 28,
          column: 9
        }
      },
      "6": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 33,
          column: 8
        }
      },
      "7": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 46,
          column: 4
        }
      },
      "8": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
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
            line: 48,
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
            line: 15,
            column: 7
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        loc: {
          start: {
            line: 30,
            column: 13
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 30
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
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a07ea98bc4953e2a9e3b9321020c3beaa45bb9fc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1gzs1rzsfc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1gzs1rzsfc();
const {
  Model
} = (cov_1gzs1rzsfc().s[0]++, require("sequelize"));
cov_1gzs1rzsfc().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_1gzs1rzsfc().f[0]++;

  class s_classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools,
      edu_fac_acad_years,
      edu_fac_classes
    }) {
      cov_1gzs1rzsfc().f[1]++;
      cov_1gzs1rzsfc().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: "representerId",
        as: "representer"
      });
      cov_1gzs1rzsfc().s[3]++;
      this.belongsTo(schools, {
        foreignKey: "schoolId",
        as: "school"
      });
      cov_1gzs1rzsfc().s[4]++;
      this.belongsTo(edu_fac_classes, {
        foreignKey: "eduFacultyClassId",
        as: "eduFacultyClass"
      });
      cov_1gzs1rzsfc().s[5]++;
      this.belongsTo(edu_fac_acad_years, {
        foreignKey: "eduFacAcadYearId",
        as: "educationFacultyAcademicYear"
      });
    }

    toJSON() {
      cov_1gzs1rzsfc().f[2]++;
      cov_1gzs1rzsfc().s[6]++;
      return { ...this.get()
      };
    }

  }

  cov_1gzs1rzsfc().s[7]++;
  s_classes.init({
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "s_classes"
  });
  cov_1gzs1rzsfc().s[8]++;
  return s_classes;
};