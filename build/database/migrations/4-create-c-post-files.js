'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_1707hcw1rg() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-post-files.js";
  var hash = "f1b5a90f05e1495bf8090b68a21949c725b225ed";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-post-files.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 42,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 37,
          column: 7
        }
      },
      "2": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 51
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
            line: 38,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 40
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 39
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
    hash: "f1b5a90f05e1495bf8090b68a21949c725b225ed"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1707hcw1rg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1707hcw1rg();
cov_1707hcw1rg().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1707hcw1rg().f[0]++;
    cov_1707hcw1rg().s[1]++;
    await queryInterface.createTable('c_post_files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      file: {
        type: Sequelize.TEXT
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
    cov_1707hcw1rg().f[1]++;
    cov_1707hcw1rg().s[2]++;
    await queryInterface.dropTable('c_post_files');
  }

};