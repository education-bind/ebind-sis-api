"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_xnlh5cj5t() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\6-create-e-assignment-user-answers.js";
  var hash = "6ceeb6e2ccaf47ec97d0f22a21c1248513db69ac";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\6-create-e-assignment-user-answers.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 69,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 64,
          column: 7
        }
      },
      "2": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 67,
          column: 64
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
            line: 65,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 66,
            column: 2
          },
          end: {
            line: 66,
            column: 3
          }
        },
        loc: {
          start: {
            line: 66,
            column: 40
          },
          end: {
            line: 68,
            column: 3
          }
        },
        line: 66
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
    hash: "6ceeb6e2ccaf47ec97d0f22a21c1248513db69ac"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_xnlh5cj5t = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_xnlh5cj5t();
cov_xnlh5cj5t().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_xnlh5cj5t().f[0]++;
    cov_xnlh5cj5t().s[1]++;
    await queryInterface.createTable("e_assignment_user_answers", {
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
          model: "edu_users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      eAssignmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "e_assignments",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      attemptId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "e_assignment_attempts",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      eAnswerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "e_answers",
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
    cov_xnlh5cj5t().f[1]++;
    cov_xnlh5cj5t().s[2]++;
    await queryInterface.dropTable("e_assignment_user_answers");
  }

};