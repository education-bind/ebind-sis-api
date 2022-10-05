'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('assignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      assignmentCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'assignment_categories',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      scoreEntryPoints: {
        type: Sequelize.INTEGER
      },
      scoreTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'score_types',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      description: {
        type: Sequelize.TEXT
      },
      publishScoreDate: {
        type: Sequelize.DATE
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      moduleId: {
        type: Sequelize.INTEGER
      },
      moduleType: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      assignmentType: {
        type: Sequelize.STRING
      },
      eAssignmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'e_assignment',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('assignments');
  }
};