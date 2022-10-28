"use strict";
/** @type {import('sequelize-cli').Migration} */

function cov_23zept4fug() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\8-create-student-attendances.js";
  var hash = "ca639893f8c777c21908b43ce55f1a5e9e351391";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\migrations\\8-create-student-attendances.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 72,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 67,
          column: 7
        }
      },
      "2": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 58
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
            line: 68,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 69,
            column: 3
          }
        },
        loc: {
          start: {
            line: 69,
            column: 40
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 69
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
    hash: "ca639893f8c777c21908b43ce55f1a5e9e351391"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23zept4fug = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_23zept4fug();
cov_23zept4fug().s[0]++;
module.exports = {
  async up(queryInterface, Sequelize) {
    cov_23zept4fug().f[0]++;
    cov_23zept4fug().s[1]++;
    await queryInterface.createTable("student_attendances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      schoolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "schools",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      eduFacAcadYearSemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_fac_acad_year_semisters",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      schoolClassTimetableId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "s_class_timetables",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      status: {
        type: Sequelize.STRING
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
    cov_23zept4fug().f[1]++;
    cov_23zept4fug().s[2]++;
    await queryInterface.dropTable("student_attendances");
  }

};