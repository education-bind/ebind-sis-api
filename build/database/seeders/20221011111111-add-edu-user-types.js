"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_zcsdaldmv() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221011111111-add-edu-user-types.js";
  var hash = "c50ecd24263ab4d1387bd30c3105533ad99de90b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221011111111-add-edu-user-types.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 32,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 26,
          column: 6
        }
      },
      "2": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
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
            line: 27,
            column: 3
          }
        },
        line: 5
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
    hash: "c50ecd24263ab4d1387bd30c3105533ad99de90b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_zcsdaldmv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_zcsdaldmv();
cov_zcsdaldmv().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_zcsdaldmv().f[0]++;
    cov_zcsdaldmv().s[1]++;
    await queryInterface.bulkInsert("edu_user_types", [{
      name: "sis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "community",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "ebind",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    cov_zcsdaldmv().f[1]++;
    cov_zcsdaldmv().s[2]++;
    await queryInterface.bulkDelete("edu_user_types", null, {});
  }

};