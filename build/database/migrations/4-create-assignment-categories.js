"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_16pt6w31ak() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-assignment-categories.js";
  var hash = "9d2c8125417a045b7b56aa91cabf321f2ef2e0a4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-assignment-categories.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 58,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 53,
          column: 7
        }
      },
      "2": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 60
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
            line: 54,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 40
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 55
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
    hash: "9d2c8125417a045b7b56aa91cabf321f2ef2e0a4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16pt6w31ak = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_16pt6w31ak();
cov_16pt6w31ak().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_16pt6w31ak().f[0]++;
    cov_16pt6w31ak().s[1]++;
    await queryInterface.createTable("assignment_categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schoolFaciltyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "s_faculties",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      schoolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "schools",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      name: {
        type: Sequelize.STRING
      },
      abbreviation: {
        type: Sequelize.STRING
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
    cov_16pt6w31ak().f[1]++;
    cov_16pt6w31ak().s[2]++;
    await queryInterface.dropTable("assignment_categories");
  }

};