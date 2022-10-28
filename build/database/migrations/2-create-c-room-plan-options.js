'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_1qyyvvdssk() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\2-create-c-room-plan-options.js";
  var hash = "b90994c35449f2f09d92a38f31865c9e42366790";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\2-create-c-room-plan-options.js",
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
    hash: "b90994c35449f2f09d92a38f31865c9e42366790"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1qyyvvdssk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1qyyvvdssk();
cov_1qyyvvdssk().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1qyyvvdssk().f[0]++;
    cov_1qyyvvdssk().s[1]++;
    await queryInterface.createTable('c_room_plan_options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cRoomPlanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'c_room_plans',
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
    cov_1qyyvvdssk().f[1]++;
    cov_1qyyvvdssk().s[2]++;
    await queryInterface.dropTable('c_room_plan_options');
  }

};