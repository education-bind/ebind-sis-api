'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_e3olkiffw() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-guardian-relationships.js";
  var hash = "a042cc56639f6111b080ed7bc30b74d9ff19fb95";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-guardian-relationships.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 32,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 27,
          column: 7
        }
      },
      "2": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 61
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
            line: 28,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 40
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 29
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
    hash: "a042cc56639f6111b080ed7bc30b74d9ff19fb95"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_e3olkiffw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_e3olkiffw();
cov_e3olkiffw().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_e3olkiffw().f[0]++;
    cov_e3olkiffw().s[1]++;
    await queryInterface.createTable('guardian_relationships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
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
    cov_e3olkiffw().f[1]++;
    cov_e3olkiffw().s[2]++;
    await queryInterface.dropTable('guardian_relationships');
  }

};