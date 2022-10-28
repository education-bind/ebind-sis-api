'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_2mv9gxllb0() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\5-create-e-answers.js";
  var hash = "1c91bbbe321dc79966fbdbe56cf786a14a5b2be0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\5-create-e-answers.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 45,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 40,
          column: 7
        }
      },
      "2": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 48
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
            line: 41,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        loc: {
          start: {
            line: 42,
            column: 40
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 42
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
    hash: "1c91bbbe321dc79966fbdbe56cf786a14a5b2be0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mv9gxllb0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2mv9gxllb0();
cov_2mv9gxllb0().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_2mv9gxllb0().f[0]++;
    cov_2mv9gxllb0().s[1]++;
    await queryInterface.createTable('e_answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eQuestionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'e_questions',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      answer: {
        type: Sequelize.STRING
      },
      isCorrect: {
        type: Sequelize.BOOLEAN
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
    cov_2mv9gxllb0().f[1]++;
    cov_2mv9gxllb0().s[2]++;
    await queryInterface.dropTable('e_answers');
  }

};