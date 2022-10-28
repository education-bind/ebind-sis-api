'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_25ys4ukxqz() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-c-tag-descriptions.js";
  var hash = "0d29ca8d5eb8401852752b2d38500691b4bd2e97";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-c-tag-descriptions.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 55,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 50,
          column: 7
        }
      },
      "2": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 57
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
            line: 51,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        },
        loc: {
          start: {
            line: 52,
            column: 40
          },
          end: {
            line: 54,
            column: 3
          }
        },
        line: 52
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
    hash: "0d29ca8d5eb8401852752b2d38500691b4bd2e97"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25ys4ukxqz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_25ys4ukxqz();
cov_25ys4ukxqz().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_25ys4ukxqz().f[0]++;
    cov_25ys4ukxqz().s[1]++;
    await queryInterface.createTable('c_tag_descriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cTagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'c_tags',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
      description: {
        type: Sequelize.TEXT
      },
      accurate: {
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
    cov_25ys4ukxqz().f[1]++;
    cov_25ys4ukxqz().s[2]++;
    await queryInterface.dropTable('c_tag_descriptions');
  }

};