"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("assignment_scores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      classId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "s_classes",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      assignmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assignments",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      takeAssignment: {
        type: Sequelize.BOOLEAN,
      },
      score: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.TEXT,
      },
      flagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "score_flags",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      isMarked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      scoreTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "score_types",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("assignment_scores");
  },
};
