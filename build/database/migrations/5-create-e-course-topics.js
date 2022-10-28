'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_ttowg1735() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\5-create-e-course-topics.js";
  var hash = "b4131582165f54926b6520aceeb3c9cec0073ca8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\5-create-e-course-topics.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 44,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 39,
          column: 7
        }
      },
      "2": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        loc: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 40
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 41
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b4131582165f54926b6520aceeb3c9cec0073ca8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ttowg1735 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ttowg1735();
cov_ttowg1735().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_ttowg1735().f[0]++;
    cov_ttowg1735().s[1]++;
    await queryInterface.createTable('e_course_topics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eCourseSectionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'e_course_sections',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    cov_ttowg1735().f[1]++;
    cov_ttowg1735().s[2]++;
    await queryInterface.dropTable('e_course_topics');
  }

};