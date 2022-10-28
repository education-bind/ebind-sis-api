"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_1yf0gruqof() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\8-create-assignment-scores.js";
  var hash = "641725e4766aac79d1b87bc8517523050309993c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\8-create-assignment-scores.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 92,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 87,
          column: 7
        }
      },
      "2": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
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
            line: 88,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 89,
            column: 3
          }
        },
        loc: {
          start: {
            line: 89,
            column: 40
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 89
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
    hash: "641725e4766aac79d1b87bc8517523050309993c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1yf0gruqof = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1yf0gruqof();
cov_1yf0gruqof().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1yf0gruqof().f[0]++;
    cov_1yf0gruqof().s[1]++;
    await queryInterface.createTable("assignment_scores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      classId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "s_classes",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      assignmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assignments",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      takeAssignment: {
        type: Sequelize.BOOLEAN
      },
      score: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.TEXT
      },
      flagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "score_flags",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      isMarked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    cov_1yf0gruqof().f[1]++;
    cov_1yf0gruqof().s[2]++;
    await queryInterface.dropTable("assignment_scores");
  }

};