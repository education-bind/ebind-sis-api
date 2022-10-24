"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "edu_admin_user_infos",
      [
        {
          userId: 99999,
          identityNumber: "qwerty1233nefu12",
          role: "super_admin",
          identityNumberType: "passport",
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("edu_admin_user_infos", null, {});
  },
};
