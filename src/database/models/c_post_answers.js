"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_post_answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, c_posts }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(c_posts, { foreignKey: "cPostId", as: "cPost" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_post_answers.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      isCorrect: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_post_answers",
    }
  );
  return c_post_answers;
};
