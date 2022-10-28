'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_pdaw1b0ie() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-room-assignments.js";
  var hash = "6ef4f50700e71c30930304b65008580f1a048a65";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-room-assignments.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 71,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 66,
          column: 7
        }
      },
      "2": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
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
            line: 67,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 40
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 68
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
    hash: "6ef4f50700e71c30930304b65008580f1a048a65"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pdaw1b0ie = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_pdaw1b0ie();
cov_pdaw1b0ie().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_pdaw1b0ie().f[0]++;
    cov_pdaw1b0ie().s[1]++;
    await queryInterface.createTable('c_room_assignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cRoomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'c_rooms',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      eAssignmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'e_assignments',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      scoreTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'score_types',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      scoreEntryPoints: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      publishScoreDate: {
        type: Sequelize.DATE
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
    cov_pdaw1b0ie().f[1]++;
    cov_pdaw1b0ie().s[2]++;
    await queryInterface.dropTable('c_room_assignments');
  }

};