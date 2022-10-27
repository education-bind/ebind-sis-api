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
        {
          userId: 99991,
          identityNumber: "qwe1233nefu12",
          role: "tester",
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
