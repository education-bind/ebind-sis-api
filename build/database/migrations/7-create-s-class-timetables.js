'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_1rgbz9rgom() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\7-create-s-class-timetables.js";
  var hash = "36880a001ae888528dad72b27226336384a54d91";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\7-create-s-class-timetables.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 79,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 74,
          column: 7
        }
      },
      "2": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
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
            line: 75,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 40
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 76
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
    hash: "36880a001ae888528dad72b27226336384a54d91"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rgbz9rgom = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1rgbz9rgom();
cov_1rgbz9rgom().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1rgbz9rgom().f[0]++;
    cov_1rgbz9rgom().s[1]++;
    await queryInterface.createTable('s_class_timetables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schoolClassId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 's_classes',
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
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      startTime: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      teacherId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      moduleId: {
        type: Sequelize.INTEGER
      },
      moduleType: {
        type: Sequelize.STRING
      },
      day: {
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
    cov_1rgbz9rgom().f[1]++;
    cov_1rgbz9rgom().s[2]++;
    await queryInterface.dropTable('s_class_timetables');
  }

};