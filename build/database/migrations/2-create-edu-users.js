'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_ms9g2rmgy() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\2-create-edu-users.js";
  var hash = "96d270dff49c03999195daece07f456667e259e5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\2-create-edu-users.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 94,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 89,
          column: 7
        }
      },
      "2": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
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
            line: 90,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        loc: {
          start: {
            line: 91,
            column: 40
          },
          end: {
            line: 93,
            column: 3
          }
        },
        line: 91
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
    hash: "96d270dff49c03999195daece07f456667e259e5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ms9g2rmgy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ms9g2rmgy();
cov_ms9g2rmgy().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_ms9g2rmgy().f[0]++;
    cov_ms9g2rmgy().s[1]++;
    await queryInterface.createTable('edu_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_user_types',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      communityCountryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'countries',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      middleName: Sequelize.STRING,
      userName: {
        type: Sequelize.STRING,
        unique: true
      },
      mailingAddress: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        unique: true
      },
      profileImage: Sequelize.TEXT,
      gender: Sequelize.ENUM('male', 'female', ''),
      birthDate: Sequelize.DATE,
      password: Sequelize.STRING,
      passwordChangedAt: Sequelize.DATE,
      passwordResetToken: Sequelize.TEXT,
      passwordResetExpires: Sequelize.STRING,
      twoFA: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      fixedNavBar: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      darkMode: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      miniSidenav: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      sidenavColor: Sequelize.STRING,
      sidenavType: Sequelize.STRING,
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
    cov_ms9g2rmgy().f[1]++;
    cov_ms9g2rmgy().s[2]++;
    await queryInterface.dropTable('edu_users');
  }

};