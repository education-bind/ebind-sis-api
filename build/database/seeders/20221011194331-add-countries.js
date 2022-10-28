"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_1yjswz6fng() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221011194331-add-countries.js";
  var hash = "7cad4564aab5be27e9369fa175ee2e00a13374ff";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221011194331-add-countries.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 26,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 20,
          column: 6
        }
      },
      "2": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 38
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 40
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 23
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
    hash: "7cad4564aab5be27e9369fa175ee2e00a13374ff"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1yjswz6fng = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1yjswz6fng();
cov_1yjswz6fng().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1yjswz6fng().f[0]++;
    cov_1yjswz6fng().s[1]++;
    await queryInterface.bulkInsert("countries", [{
      name: "rwanda",
      extension: "Kn",
      latitude: 1.027,
      longitude: 1.44,
      code: 252,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    cov_1yjswz6fng().f[1]++;
    cov_1yjswz6fng().s[2]++;
    await queryInterface.bulkDelete("countries", null, {});
  }

};