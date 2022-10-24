"use strict";

const bcryptjs = require("bcryptjs");
const { hash } = bcryptjs;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "edu_users",
      [
        {
          id: 99999,
          userTypeId: 3,
          communityCountryId: 1,
          firstName: "Eddy",
          lastName: "Uwambaje",
          userName: "leftie",
          mailingAddress: "superadmin@gmail.com",
          email: "superadmin@gmail.com",
          phoneNumber: "078123881",
          gender: "male",
          password: await hash("uwambaje", 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("edu_users", null, {});
  },
};
