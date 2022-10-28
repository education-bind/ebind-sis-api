"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_28tzczgy3a() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-s-chats.js";
  var hash = "4978a85410ae90a000b62f2ae23e7b788d8a7a17";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\3-create-s-chats.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 84,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 79,
          column: 7
        }
      },
      "2": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
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
            line: 80,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 81,
            column: 3
          }
        },
        loc: {
          start: {
            line: 81,
            column: 40
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 81
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
    hash: "4978a85410ae90a000b62f2ae23e7b788d8a7a17"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_28tzczgy3a = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_28tzczgy3a();
cov_28tzczgy3a().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_28tzczgy3a().f[0]++;
    cov_28tzczgy3a().s[1]++;
    await queryInterface.createTable("s_chats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schoolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      userFromId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      userToId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      messageType: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      messagReplyId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "s_chats",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      file: {
        type: Sequelize.TEXT
      },
      fileType: {
        type: Sequelize.STRING
      },
      textMessage: {
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
    cov_28tzczgy3a().f[1]++;
    cov_28tzczgy3a().s[2]++;
    await queryInterface.dropTable("s_chats");
  }

};