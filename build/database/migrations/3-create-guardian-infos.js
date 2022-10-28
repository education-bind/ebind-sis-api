'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_1fki6k1rud() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-guardian-infos.js";
  var hash = "fc8dbd73faebc7a663800a582226d7b111960da6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-guardian-infos.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 48,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 43,
          column: 7
        }
      },
      "2": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 53
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
            line: 44,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        loc: {
          start: {
            line: 45,
            column: 40
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 45
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
    hash: "fc8dbd73faebc7a663800a582226d7b111960da6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fki6k1rud = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1fki6k1rud();
cov_1fki6k1rud().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1fki6k1rud().f[0]++;
    cov_1fki6k1rud().s[1]++;
    await queryInterface.createTable('guardian_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      identityNumber: {
        type: Sequelize.STRING
      },
      identityNumberType: {
        type: Sequelize.STRING
      },
      isVerfied: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      verificationToken: {
        type: Sequelize.TEXT
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
    cov_1fki6k1rud().f[1]++;
    cov_1fki6k1rud().s[2]++;
    await queryInterface.dropTable('guardian_infos');
  }

};