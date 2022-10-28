"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_9wp4g0viy() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-room-payed-plans.js";
  var hash = "c34c26a968a8466df5b4d0f6949b564d29e44234";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-room-payed-plans.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 59,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 54,
          column: 7
        }
      },
      "2": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
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
            line: 55,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        },
        loc: {
          start: {
            line: 56,
            column: 40
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 56
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
    hash: "c34c26a968a8466df5b4d0f6949b564d29e44234"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9wp4g0viy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_9wp4g0viy();
cov_9wp4g0viy().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_9wp4g0viy().f[0]++;
    cov_9wp4g0viy().s[1]++;
    await queryInterface.createTable("c_room_payed_plans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "c_rooms",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      cRoomPlanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "c_room_plans",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
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
    cov_9wp4g0viy().f[1]++;
    cov_9wp4g0viy().s[2]++;
    await queryInterface.dropTable("c_room_payed_plans");
  }

};