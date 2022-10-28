'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_25pmpky4p2() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-post-answers.js";
  var hash = "1cce4153dfc808591ab9fbf31f8cd4e1db46ee89";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-post-answers.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 58,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 53,
          column: 7
        }
      },
      "2": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 53
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
            line: 54,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 40
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 55
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
    hash: "1cce4153dfc808591ab9fbf31f8cd4e1db46ee89"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25pmpky4p2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_25pmpky4p2();
cov_25pmpky4p2().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_25pmpky4p2().f[0]++;
    cov_25pmpky4p2().s[1]++;
    await queryInterface.createTable('c_post_answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      cPostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'c_posts',
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
    cov_25pmpky4p2().f[1]++;
    cov_25pmpky4p2().s[2]++;
    await queryInterface.dropTable('c_post_answers');
  }

};