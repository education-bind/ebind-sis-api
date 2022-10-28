'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_14bk41pg8q() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-e-assignments.js";
  var hash = "7ba0009a5a30f44c722e88875529efb08fec8f7e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-e-assignments.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 54,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 49,
          column: 7
        }
      },
      "2": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 52
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
            line: 50,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        loc: {
          start: {
            line: 51,
            column: 40
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 51
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
    hash: "7ba0009a5a30f44c722e88875529efb08fec8f7e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_14bk41pg8q = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_14bk41pg8q();
cov_14bk41pg8q().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_14bk41pg8q().f[0]++;
    cov_14bk41pg8q().s[1]++;
    await queryInterface.createTable('e_assignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      name: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      abbreviation: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.BOOLEAN
      },
      time: {
        type: Sequelize.INTEGER
      },
      description: {
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
    cov_14bk41pg8q().f[1]++;
    cov_14bk41pg8q().s[2]++;
    await queryInterface.dropTable('e_assignments');
  }

};