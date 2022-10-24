'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('c_room_settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cRoomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'c_rooms',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      userLimit: {
        type: Sequelize.INTEGER
      },
      locked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      invite: {
        type: Sequelize.BOOLEAN
      },
      posting: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      hidden: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      color: {
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
    await queryInterface.dropTable('c_room_settings');
  }
};