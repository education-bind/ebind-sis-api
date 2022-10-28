'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_1k21iv279y() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-c-user-infos.js";
  var hash = "e821b5552548e79f40f69b671ab9bb7cf68971e5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-c-user-infos.js",
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
    hash: "e821b5552548e79f40f69b671ab9bb7cf68971e5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1k21iv279y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1k21iv279y();
cov_1k21iv279y().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1k21iv279y().f[0]++;
    cov_1k21iv279y().s[1]++;
    await queryInterface.createTable('c_user_infos', {
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
      identityNumber: {
        type: Sequelize.STRING
      },
      identityNumberType: {
        type: Sequelize.STRING
      },
      isVerfied: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      verficationToken: {
        type: Sequelize.TEXT
      },
      authProvider: {
        type: Sequelize.STRING
      },
      reputation: {
        type: Sequelize.INTEGER,
        defaultValue: 1
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
    cov_1k21iv279y().f[1]++;
    cov_1k21iv279y().s[2]++;
    await queryInterface.dropTable('c_user_infos');
  }

};