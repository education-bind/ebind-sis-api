'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('c_room_assignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cRoomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'c_rooms',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      eAssignmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'e_assignments',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
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
      scoreEntryPoints: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('c_room_assignments');
  }
};