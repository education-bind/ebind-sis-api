'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_u8bluq4f3() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-guardian-students.js";
  var hash = "2dd02a869a9813ac9dc7127a4984482c4029db7e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-guardian-students.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 61,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 56,
          column: 7
        }
      },
      "2": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 56
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
            line: 57,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 40
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 58
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
    hash: "2dd02a869a9813ac9dc7127a4984482c4029db7e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_u8bluq4f3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_u8bluq4f3();
cov_u8bluq4f3().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_u8bluq4f3().f[0]++;
    cov_u8bluq4f3().s[1]++;
    await queryInterface.createTable('guardian_students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guardianId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      guardianRelationshipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'guardian_relationships',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      liveWith: {
        type: Sequelize.BOOLEAN
      },
      schoolPickup: {
        type: Sequelize.BOOLEAN
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
    cov_u8bluq4f3().f[1]++;
    cov_u8bluq4f3().s[2]++;
    await queryInterface.dropTable('guardian_students');
  }

};