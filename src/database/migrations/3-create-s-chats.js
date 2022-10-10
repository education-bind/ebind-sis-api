"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("s_chats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      schoolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      userFromId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      userToId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edu_users",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      messageType: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      messagReplyId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "s_chats",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      file: {
        type: Sequelize.TEXT,
      },
      fileType: {
        type: Sequelize.STRING,
      },
      textMessage: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("s_chats");
  },
};
