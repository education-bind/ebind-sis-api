"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_1r5xzj17jk() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221015084321-add-edu-permissions.js";
  var hash = "a9a65e90d0efe1de5c2094ef18cc90e5a8106a9f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221015084321-add-edu-permissions.js",
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
          column: 65
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
    hash: "a9a65e90d0efe1de5c2094ef18cc90e5a8106a9f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1r5xzj17jk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1r5xzj17jk();
cov_1r5xzj17jk().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1r5xzj17jk().f[0]++;
    cov_1r5xzj17jk().s[1]++;
    await queryInterface.bulkInsert("edu_permissions", [{
      name: "Update calender",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    cov_1r5xzj17jk().f[1]++;
    cov_1r5xzj17jk().s[2]++;
    await queryInterface.bulkDelete("edu_permissions", null, {});
  }

};