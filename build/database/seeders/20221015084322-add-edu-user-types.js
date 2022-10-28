"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_my1p5lln6() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221015084322-add-edu-user-types.js";
  var hash = "4ab6c423196d1f7d3151fdaef7ba13b932eeaf76";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221015084322-add-edu-user-types.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 22,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 16,
          column: 6
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 64
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
            line: 17,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 40
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 19
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
    hash: "4ab6c423196d1f7d3151fdaef7ba13b932eeaf76"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_my1p5lln6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_my1p5lln6();
cov_my1p5lln6().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_my1p5lln6().f[0]++;
    cov_my1p5lln6().s[1]++;
    await queryInterface.bulkInsert("edu_user_types", [{
      name: "officer",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    cov_my1p5lln6().f[1]++;
    cov_my1p5lln6().s[2]++;
    await queryInterface.bulkDelete("edu_user_types", null, {});
  }

};