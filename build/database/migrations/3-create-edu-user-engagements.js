'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_24dwtn3ga() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-edu-user-engagements.js";
  var hash = "652bddca4e4f16f7f9e27b07bddc67617c6f0deb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-edu-user-engagements.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 46,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 41,
          column: 7
        }
      },
      "2": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 59
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
            line: 42,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        loc: {
          start: {
            line: 43,
            column: 40
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 43
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
    hash: "652bddca4e4f16f7f9e27b07bddc67617c6f0deb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_24dwtn3ga = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_24dwtn3ga();
cov_24dwtn3ga().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_24dwtn3ga().f[0]++;
    cov_24dwtn3ga().s[1]++;
    await queryInterface.createTable('edu_user_engagements', {
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
      page: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE
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
    cov_24dwtn3ga().f[1]++;
    cov_24dwtn3ga().s[2]++;
    await queryInterface.dropTable('edu_user_engagements');
  }

};