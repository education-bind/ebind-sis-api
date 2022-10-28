'use strict';

function cov_12gafuhsl1() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_course_sections.js";
  var hash = "353676380cc68c53f53bd24dc65cb5dcc86ecf2c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_course_sections.js",
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
          line: 31,
          column: 2
        }
      },
      "2": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 84
        }
      },
      "3": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 18,
          column: 8
        }
      },
      "4": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "5": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
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
            line: 31,
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
            column: 36
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 15
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
    hash: "353676380cc68c53f53bd24dc65cb5dcc86ecf2c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12gafuhsl1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_12gafuhsl1();
const {
  Model
} = (cov_12gafuhsl1().s[0]++, require('sequelize'));
cov_12gafuhsl1().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_12gafuhsl1().f[0]++;

  class e_course_sections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      e_courses
    }) {
      cov_12gafuhsl1().f[1]++;
      cov_12gafuhsl1().s[2]++;
      this.belongsTo(e_courses, {
        foreignKey: 'eCourseId',
        as: 'eLearningCourse'
      });
    }

    toJSON() {
      cov_12gafuhsl1().f[2]++;
      cov_12gafuhsl1().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_12gafuhsl1().s[4]++;
  e_course_sections.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    sectionType: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'e_course_sections'
  });
  cov_12gafuhsl1().s[5]++;
  return e_course_sections;
};