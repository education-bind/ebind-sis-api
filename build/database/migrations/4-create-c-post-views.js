'use strict';
/** @type {import('sequelize-cli').Migration} */

function cov_1h6iy1gzwc() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-post-views.js";
  var hash = "647b71ee9b6fb8c1b9c53e40e71d901c773dbe3d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\4-create-c-post-views.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 52,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 47,
          column: 7
        }
      },
      "2": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 51
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
            line: 48,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 40
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 49
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
    hash: "647b71ee9b6fb8c1b9c53e40e71d901c773dbe3d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1h6iy1gzwc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1h6iy1gzwc();
cov_1h6iy1gzwc().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_1h6iy1gzwc().f[0]++;
    cov_1h6iy1gzwc().s[1]++;
    await queryInterface.createTable('c_post_views', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      viewerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      cPostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'c_posts',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      ipAddress: {
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
    cov_1h6iy1gzwc().f[1]++;
    cov_1h6iy1gzwc().s[2]++;
    await queryInterface.dropTable('c_post_views');
  }

};