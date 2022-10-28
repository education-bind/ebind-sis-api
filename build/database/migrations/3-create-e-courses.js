'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_yilezqi2t() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-e-courses.js";
  var hash = "c87723fb7a3ff810f5a13553678741a9d4c74dd9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-e-courses.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 54,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 49,
          column: 7
        }
      },
      "2": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
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
            line: 50,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        loc: {
          start: {
            line: 51,
            column: 40
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 51
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
    hash: "c87723fb7a3ff810f5a13553678741a9d4c74dd9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_yilezqi2t = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_yilezqi2t();
cov_yilezqi2t().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_yilezqi2t().f[0]++;
    cov_yilezqi2t().s[1]++;
    await queryInterface.createTable('e_courses', {
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
      name: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      author: {
        type: Sequelize.STRING
      },
      pubDate: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.TEXT
      },
      description: {
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
    cov_yilezqi2t().f[1]++;
    cov_yilezqi2t().s[2]++;
    await queryInterface.dropTable('e_courses');
  }

};