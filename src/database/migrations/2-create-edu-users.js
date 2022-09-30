'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      communityCountryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'countries',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      middleName: Sequelize.STRING,
      userName: {
        type: Sequelize.STRING,
        unique: true,
      },
      mailingAddress: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        unique: true,
      },
      profileImage: Sequelize.TEXT,
      gender: Sequelize.ENUM(
        'male',
        'female',
        '',
      ),
      birthDate: Sequelize.DATE,
      password: Sequelize.STRING,
      passwordChangedAt: Sequelize.DATE,
      passwordResetToken: Sequelize.TEXT,
      passwordResetExpires: Sequelize.STRING,
      twoFA: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      fixedNavBar: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      darkMode: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      miniSidenav: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      sidenavColor: Sequelize.STRING,
      sidenavType: Sequelize.STRING,
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable('edu_users');
  }
};