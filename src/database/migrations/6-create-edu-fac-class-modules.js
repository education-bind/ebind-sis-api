'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('edu_fac_class_modules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eduFacultyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_faculties',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      eduFacClassId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'edu_fac_classes',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING
      },
      abbreviation: {
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
    await queryInterface.dropTable('edu_fac_class_modules');
  }
};