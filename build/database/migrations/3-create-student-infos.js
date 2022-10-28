'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_24hd28ss2i() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-student-infos.js";
  var hash = "53ab04f6ccfbb648f28fd09c5acc32346ecb8e14";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-student-infos.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 78,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 73,
          column: 7
        }
      },
      "2": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 52
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
            line: 74,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        loc: {
          start: {
            line: 75,
            column: 40
          },
          end: {
            line: 77,
            column: 3
          }
        },
        line: 75
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
    hash: "53ab04f6ccfbb648f28fd09c5acc32346ecb8e14"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_24hd28ss2i = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_24hd28ss2i();
cov_24hd28ss2i().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_24hd28ss2i().f[0]++;
    cov_24hd28ss2i().s[1]++;
    await queryInterface.createTable('student_infos', {
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
      currentSchoolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'schools',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      fatherPhone: {
        type: Sequelize.INTEGER
      },
      matherPhone: {
        type: Sequelize.INTEGER
      },
      fatherName: {
        type: Sequelize.STRING
      },
      matherName: {
        type: Sequelize.STRING
      },
      homeAddress: {
        type: Sequelize.STRING
      },
      identityNumber: {
        type: Sequelize.STRING
      },
      identityNumberType: {
        type: Sequelize.STRING
      },
      bloodType: {
        type: Sequelize.STRING
      },
      countryOfBirth: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      studentNumber: {
        type: Sequelize.INTEGER
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
    cov_24hd28ss2i().f[1]++;
    cov_24hd28ss2i().s[2]++;
    await queryInterface.dropTable('student_infos');
  }

};