"use strict";

function cov_28l7k1hsel() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_course_user_documents.js";
  var hash = "9c7515fbc53a836454db24969ca9a087fcb750fe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\e_course_user_documents.js",
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
          line: 35,
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
          line: 33,
          column: 4
        }
      },
      "5": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 33
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
            line: 35,
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
            column: 44
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
    hash: "9c7515fbc53a836454db24969ca9a087fcb750fe"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_28l7k1hsel = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_28l7k1hsel();
const {
  Model
} = (cov_28l7k1hsel().s[0]++, require("sequelize"));
cov_28l7k1hsel().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_28l7k1hsel().f[0]++;

  class e_course_user_documents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      e_course_sections
    }) {
      cov_28l7k1hsel().f[1]++;
      cov_28l7k1hsel().s[2]++;
      this.belongsTo(e_course_sections, {
        foreignKey: "eCourseSectionId",
        as: "eLearningCourseSetion"
      });
    }

    toJSON() {
      cov_28l7k1hsel().f[2]++;
      cov_28l7k1hsel().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_28l7k1hsel().s[4]++;
  e_course_user_documents.init({
    title: DataTypes.STRING,
    docName: DataTypes.STRING,
    docPath: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "e_course_user_documents"
  });
  cov_28l7k1hsel().s[5]++;
  return e_course_user_documents;
};