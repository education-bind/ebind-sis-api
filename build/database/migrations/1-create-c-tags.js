'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_1eiut7i9iv() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-c-tags.js";
  var hash = "44aa8ecb95f73e9c48af75d79431e98de824a954";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-c-tags.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 33,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 28,
          column: 7
        }
      },
      "2": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 45
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
            line: 29,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        loc: {
          start: {
            line: 30,
            column: 40
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 30
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
    hash: "44aa8ecb95f73e9c48af75d79431e98de824a954"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1eiut7i9iv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1eiut7i9iv();
cov_1eiut7i9iv().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1eiut7i9iv().f[0]++;
    cov_1eiut7i9iv().s[1]++;
    await queryInterface.createTable('c_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
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
    cov_1eiut7i9iv().f[1]++;
    cov_1eiut7i9iv().s[2]++;
    await queryInterface.dropTable('c_tags');
  }

};