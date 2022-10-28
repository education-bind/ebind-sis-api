'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_2hjcoocms2() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\2-create-schools.js";
  var hash = "6f50af138b1e5a25e0b8a402dce10c7b0fe1af22";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\2-create-schools.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 81,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 76,
          column: 7
        }
      },
      "2": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 79,
          column: 46
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
            line: 77,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        loc: {
          start: {
            line: 78,
            column: 40
          },
          end: {
            line: 80,
            column: 3
          }
        },
        line: 78
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
    hash: "6f50af138b1e5a25e0b8a402dce10c7b0fe1af22"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hjcoocms2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2hjcoocms2();
cov_2hjcoocms2().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_2hjcoocms2().f[0]++;
    cov_2hjcoocms2().s[1]++;
    await queryInterface.createTable('schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      countryId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: 'countries',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
        unique: true
      },
      abbreviation: {
        type: Sequelize.STRING
      },
      adminId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'edu_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      regDate: {
        type: Sequelize.DATE
      },
      logoImage: {
        type: Sequelize.TEXT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      city: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
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
    cov_2hjcoocms2().f[1]++;
    cov_2hjcoocms2().s[2]++;
    await queryInterface.dropTable('schools');
  }

};