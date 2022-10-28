'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_1e34nqk4t3() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-s-spam-rates.js";
  var hash = "f2a35b1536ddc2cbf660cebd0a12f57f0eb973dc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-s-spam-rates.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 49,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 44,
          column: 7
        }
      },
      "2": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
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
            line: 45,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 46,
            column: 40
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 46
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
    hash: "f2a35b1536ddc2cbf660cebd0a12f57f0eb973dc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1e34nqk4t3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1e34nqk4t3();
cov_1e34nqk4t3().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1e34nqk4t3().f[0]++;
    cov_1e34nqk4t3().s[1]++;
    await queryInterface.createTable('s_spam_rates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sRateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 's_rates',
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
    cov_1e34nqk4t3().f[1]++;
    cov_1e34nqk4t3().s[2]++;
    await queryInterface.dropTable('s_spam_rates');
  }

};