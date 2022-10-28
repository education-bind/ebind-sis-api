'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_ohofde921() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-room-settings.js";
  var hash = "01998ecdff52dae6c560103070c15529ff2d7f6d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-room-settings.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 60,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 55,
          column: 7
        }
      },
      "2": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 54
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
            line: 56,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        loc: {
          start: {
            line: 57,
            column: 40
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 57
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
    hash: "01998ecdff52dae6c560103070c15529ff2d7f6d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ohofde921 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ohofde921();
cov_ohofde921().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_ohofde921().f[0]++;
    cov_ohofde921().s[1]++;
    await queryInterface.createTable('c_room_settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      userLimit: {
        type: Sequelize.INTEGER
      },
      locked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      invite: {
        type: Sequelize.BOOLEAN
      },
      posting: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      hidden: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      color: {
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
    cov_ohofde921().f[1]++;
    cov_ohofde921().s[2]++;
    await queryInterface.dropTable('c_room_settings');
  }

};