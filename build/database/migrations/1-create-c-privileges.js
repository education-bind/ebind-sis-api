'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_2dbjuveubu() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-c-privileges.js";
  var hash = "1d31c8373383f3aa9ee10e2ae6c6b3dcb5b4c5ff";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-c-privileges.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 38,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "2": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
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
            line: 34,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 40
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 35
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
    hash: "1d31c8373383f3aa9ee10e2ae6c6b3dcb5b4c5ff"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dbjuveubu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2dbjuveubu();
cov_2dbjuveubu().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_2dbjuveubu().f[0]++;
    cov_2dbjuveubu().s[1]++;
    await queryInterface.createTable('c_privileges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      reputationRange: {
        type: Sequelize.INTEGER
      },
      description: {
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
    cov_2dbjuveubu().f[1]++;
    cov_2dbjuveubu().s[2]++;
    await queryInterface.dropTable('c_privileges');
  }

};