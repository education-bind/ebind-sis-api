'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('c_user_infos', {
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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      identityNumber: {
        type: Sequelize.STRING
      },
      identityNumberType: {
        type: Sequelize.STRING
      },
      isVerfied: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      verficationToken: {
        type: Sequelize.TEXT
      },
      authProvider: {
        type: Sequelize.STRING
      },
      reputation: {
        type: Sequelize.INTEGER,
        defaultValue: 1
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
    await queryInterface.dropTable('c_user_infos');
  }
};