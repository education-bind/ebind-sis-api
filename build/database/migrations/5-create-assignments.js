"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_2f31qf9spr() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\5-create-assignments.js";
  var hash = "4d0f18900d95125c3abe106262850b4fef7d6a39";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\5-create-assignments.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 82,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 77,
          column: 7
        }
      },
      "2": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
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
            line: 78,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 79,
            column: 3
          }
        },
        loc: {
          start: {
            line: 79,
            column: 40
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 79
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
    hash: "4d0f18900d95125c3abe106262850b4fef7d6a39"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2f31qf9spr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2f31qf9spr();
cov_2f31qf9spr().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_2f31qf9spr().f[0]++;
    cov_2f31qf9spr().s[1]++;
    await queryInterface.createTable("assignments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      assignmentCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assignment_categories",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      scoreEntryPoints: {
        type: Sequelize.INTEGER
      },
      scoreTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "score_types",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
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
      moduleId: {
        type: Sequelize.INTEGER
      },
      moduleType: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      assignmentType: {
        type: Sequelize.STRING
      },
      eAssignmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "e_assignments",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
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
    cov_2f31qf9spr().f[1]++;
    cov_2f31qf9spr().s[2]++;
    await queryInterface.dropTable("assignments");
  }

};