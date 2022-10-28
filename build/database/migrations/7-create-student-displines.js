'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_125wqf9oca() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\7-create-student-displines.js";
  var hash = "d71b46a08e44fabdbee55403936e0b5728bf6fa8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\7-create-student-displines.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 62,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 57,
          column: 7
        }
      },
      "2": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 56
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
            line: 58,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 59,
            column: 40
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 59
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
    hash: "d71b46a08e44fabdbee55403936e0b5728bf6fa8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_125wqf9oca = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_125wqf9oca();
cov_125wqf9oca().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_125wqf9oca().f[0]++;
    cov_125wqf9oca().s[1]++;
    await queryInterface.createTable('student_displines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      schoolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'schools',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      eduFacAcadYearSemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_fac_acad_year_semisters',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      displineScore: {
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    cov_125wqf9oca().f[1]++;
    cov_125wqf9oca().s[2]++;
    await queryInterface.dropTable('student_displines');
  }

};