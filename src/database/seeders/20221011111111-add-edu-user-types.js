"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "edu_user_types",
      [
        {
          name: "sis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "community",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ebind",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("edu_user_types", null, {});
  },
};
