'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_9q6v58u0o() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-s-calender-events.js";
  var hash = "2d42c0edad5e8e60866b510f66c44994ec2e0481";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-s-calender-events.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 73,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 68,
          column: 7
        }
      },
      "2": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
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
            line: 69,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 70,
            column: 3
          }
        },
        loc: {
          start: {
            line: 70,
            column: 40
          },
          end: {
            line: 72,
            column: 3
          }
        },
        line: 70
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
    hash: "2d42c0edad5e8e60866b510f66c44994ec2e0481"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9q6v58u0o = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_9q6v58u0o();
cov_9q6v58u0o().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_9q6v58u0o().f[0]++;
    cov_9q6v58u0o().s[1]++;
    await queryInterface.createTable('s_calender_events', {
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
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      summary: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      startDateTime: {
        type: Sequelize.STRING
      },
      endDateTime: {
        type: Sequelize.STRING
      },
      timeZone: {
        type: Sequelize.TEXT
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
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
    cov_9q6v58u0o().f[1]++;
    cov_9q6v58u0o().s[2]++;
    await queryInterface.dropTable('s_calender_events');
  }

};