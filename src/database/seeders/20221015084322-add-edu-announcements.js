"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "edu_announcements",
      [
        {
          title: "ebind announcements",
          message: "we are about to update",
          link: "https://educationbind.com",
          publish: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("edu_announcements", null, {});
  },
};
