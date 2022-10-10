"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_posts.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      isForRoom: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_posts",
    }
  );
  return c_posts;
};
