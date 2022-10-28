'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_24lmyhgqes() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-c-user-reports.js";
  var hash = "061f0cc4ef2d19687b388fdd1b139c261cb4bb8e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-c-user-reports.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 56,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 51,
          column: 7
        }
      },
      "2": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
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
            line: 52,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        loc: {
          start: {
            line: 53,
            column: 40
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 53
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
    hash: "061f0cc4ef2d19687b388fdd1b139c261cb4bb8e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_24lmyhgqes = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_24lmyhgqes();
cov_24lmyhgqes().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_24lmyhgqes().f[0]++;
    cov_24lmyhgqes().s[1]++;
    await queryInterface.createTable('c_user_reports', {
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
      reportedUserId: {
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
      reviewed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    cov_24lmyhgqes().f[1]++;
    cov_24lmyhgqes().s[2]++;
    await queryInterface.dropTable('c_user_reports');
  }

};