"use strict";

function cov_1cbm9ixvk() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221012160723-add-edu-users.js";
  var hash = "d6497bca0676185ff876c50c48e52e4429c18527";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\seeders\\20221012160723-add-edu-users.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 3,
          column: 36
        }
      },
      "1": {
        start: {
          line: 4,
          column: 17
        },
        end: {
          line: 4,
          column: 25
        }
      },
      "2": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 50,
          column: 2
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 44,
          column: 6
        }
      },
      "4": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        loc: {
          start: {
            line: 8,
            column: 38
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        loc: {
          start: {
            line: 47,
            column: 40
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 47
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d6497bca0676185ff876c50c48e52e4429c18527"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1cbm9ixvk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1cbm9ixvk();
const bcryptjs = (cov_1cbm9ixvk().s[0]++, require("bcryptjs"));
const {
  hash
} = (cov_1cbm9ixvk().s[1]++, bcryptjs);
/** @type {import('sequelize-cli').Migration} */

cov_1cbm9ixvk().s[2]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1cbm9ixvk().f[0]++;
    cov_1cbm9ixvk().s[3]++;
    await queryInterface.bulkInsert("edu_users", [{
      id: 99999,
      userTypeId: 3,
      communityCountryId: 1,
      firstName: "Eddy",
      lastName: "Uwambaje",
      userName: "leftie",
      mailingAddress: "superadmin@gmail.com",
      email: "superadmin@gmail.com",
      phoneNumber: "078123881",
      gender: "male",
      password: await hash("uwambaje", 12),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 99991,
      userTypeId: 3,
      communityCountryId: 1,
      firstName: "tester",
      lastName: "tester",
      userName: "tester",
      mailingAddress: "tester@gmail.com",
      email: "tester@gmail.com",
      phoneNumber: "098123881",
      gender: "male",
      password: await hash("test", 12),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    cov_1cbm9ixvk().f[1]++;
    cov_1cbm9ixvk().s[4]++;
    await queryInterface.bulkDelete("edu_users", null, {});
  }

};