'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_1705gq7tj1() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-room-tags.js";
  var hash = "e505a78d34c9bd005b71f4f39d0f7620f6a72029";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-room-tags.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 45,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 40,
          column: 7
        }
      },
      "2": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 50
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
            line: 41,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        loc: {
          start: {
            line: 42,
            column: 40
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 42
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
    hash: "e505a78d34c9bd005b71f4f39d0f7620f6a72029"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1705gq7tj1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1705gq7tj1();
cov_1705gq7tj1().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1705gq7tj1().f[0]++;
    cov_1705gq7tj1().s[1]++;
    await queryInterface.createTable('c_room_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cTagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'c_tags',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    cov_1705gq7tj1().f[1]++;
    cov_1705gq7tj1().s[2]++;
    await queryInterface.dropTable('c_room_tags');
  }

};