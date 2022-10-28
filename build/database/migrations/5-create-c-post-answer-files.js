'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_fn9hi0d8r() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\5-create-c-post-answer-files.js";
  var hash = "f3772873a8a045b9a08fecec0c72472240055e16";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\5-create-c-post-answer-files.js",
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
          column: 58
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
    hash: "f3772873a8a045b9a08fecec0c72472240055e16"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_fn9hi0d8r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_fn9hi0d8r();
cov_fn9hi0d8r().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_fn9hi0d8r().f[0]++;
    cov_fn9hi0d8r().s[1]++;
    await queryInterface.createTable('c_post_answer_files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cPostAnswerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'c_post_answers',
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
    cov_fn9hi0d8r().f[1]++;
    cov_fn9hi0d8r().s[2]++;
    await queryInterface.dropTable('c_post_answer_files');
  }

};