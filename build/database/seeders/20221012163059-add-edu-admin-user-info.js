"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_1wdh04sqdx() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221012163059-add-edu-admin-user-info.js";
  var hash = "c84e9cfcb8c9d6583297d3286f4aadd14b4e3035";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221012163059-add-edu-admin-user-info.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 35,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 29,
          column: 6
        }
      },
      "2": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 70
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
            line: 30,
            column: 3
          }
        },
        line: 5
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
    hash: "c84e9cfcb8c9d6583297d3286f4aadd14b4e3035"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1wdh04sqdx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1wdh04sqdx();
cov_1wdh04sqdx().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1wdh04sqdx().f[0]++;
    cov_1wdh04sqdx().s[1]++;
    await queryInterface.bulkInsert("edu_admin_user_infos", [{
      userId: 99999,
      identityNumber: "qwerty1233nefu12",
      role: "super_admin",
      identityNumberType: "passport",
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 99991,
      identityNumber: "qwe1233nefu12",
      role: "tester",
      identityNumberType: "passport",
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    cov_1wdh04sqdx().f[1]++;
    cov_1wdh04sqdx().s[2]++;
    await queryInterface.bulkDelete("edu_admin_user_infos", null, {});
  }

};