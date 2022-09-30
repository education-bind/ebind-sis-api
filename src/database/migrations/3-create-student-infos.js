'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      currentSchoolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'schools',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('student_infos');
  }
};