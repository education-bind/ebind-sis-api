'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_2h5q27y0st() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-s-permission-roles.js";
  var hash = "512b35145f34acdd07daa8d66e07e093da3df9a5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-s-permission-roles.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 52,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 47,
          column: 7
        }
      },
      "2": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
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
            line: 48,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 40
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 49
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
    hash: "512b35145f34acdd07daa8d66e07e093da3df9a5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2h5q27y0st = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2h5q27y0st();
cov_2h5q27y0st().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_2h5q27y0st().f[0]++;
    cov_2h5q27y0st().s[1]++;
    await queryInterface.createTable('s_permission_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schoolRoleId: {
        type: Sequelize.INTEGER
      },
      schoolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'schools',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      eduPermissionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_permissions',
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
    cov_2h5q27y0st().f[1]++;
    cov_2h5q27y0st().s[2]++;
    await queryInterface.dropTable('s_permission_roles');
  }

};