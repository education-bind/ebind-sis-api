"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_user_reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(edu_users, {
        foreignKey: "reportedUserId",
        as: "reportedUser",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_user_reports.init(
    {
      description: DataTypes.TEXT,
      reviewed: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_user_reports",
    }
  );
  return c_user_reports;
};
