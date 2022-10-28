"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_2g96xh4f3d() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\6-create-e-score-records.js";
  var hash = "2938ee3b80526762b7fa5d8808f978a7f605169e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\6-create-e-score-records.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 62,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 57,
          column: 7
        }
      },
      "2": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
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
            line: 58,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 59,
            column: 40
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 59
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
    hash: "2938ee3b80526762b7fa5d8808f978a7f605169e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2g96xh4f3d = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2g96xh4f3d();
cov_2g96xh4f3d().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_2g96xh4f3d().f[0]++;
    cov_2g96xh4f3d().s[1]++;
    await queryInterface.createTable("e_score_records", {
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
      score: {
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
    cov_2g96xh4f3d().f[1]++;
    cov_2g96xh4f3d().s[2]++;
    await queryInterface.dropTable("e_score_records");
  }

};