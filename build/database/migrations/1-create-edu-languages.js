'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_2108t1mxyn() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-edu-languages.js";
  var hash = "ca58b262f161d1b09169658313a93cce06973f3f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-edu-languages.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 35,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 30,
          column: 7
        }
      },
      "2": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 52
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
            line: 31,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        loc: {
          start: {
            line: 32,
            column: 40
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 32
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
    hash: "ca58b262f161d1b09169658313a93cce06973f3f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2108t1mxyn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2108t1mxyn();
cov_2108t1mxyn().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_2108t1mxyn().f[0]++;
    cov_2108t1mxyn().s[1]++;
    await queryInterface.createTable('edu_languages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      abbreviation: {
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
    cov_2108t1mxyn().f[1]++;
    cov_2108t1mxyn().s[2]++;
    await queryInterface.dropTable('edu_languages');
  }

};