'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_iujyfpjyh() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-countries.js";
  var hash = "ad8ac2dc06fa66daba946ef265ac08ff11c32335";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\1-create-countries.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 47,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 42,
          column: 7
        }
      },
      "2": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 48
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
            line: 43,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        loc: {
          start: {
            line: 44,
            column: 40
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 44
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
    hash: "ad8ac2dc06fa66daba946ef265ac08ff11c32335"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_iujyfpjyh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_iujyfpjyh();
cov_iujyfpjyh().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_iujyfpjyh().f[0]++;
    cov_iujyfpjyh().s[1]++;
    await queryInterface.createTable('countries', {
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
      code: {
        type: Sequelize.INTEGER,
        unique: true
      },
      extension: {
        type: Sequelize.STRING,
        unique: true
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
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
    cov_iujyfpjyh().f[1]++;
    cov_iujyfpjyh().s[2]++;
    await queryInterface.dropTable('countries');
  }

};