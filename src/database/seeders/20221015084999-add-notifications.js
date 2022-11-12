"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "notifications",
      [
        {
          userId: 99999,
          title: "Email verification",
          link: null,
          message: "Verify your email",
          notificationTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("notifications", null, {});
  },
};
