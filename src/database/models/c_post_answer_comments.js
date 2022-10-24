"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_post_answer_comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, c_post_answers }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(c_post_answers, {
        foreignKey: "cPostAnswerId",
        as: "cPostAnswer",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_post_answer_comments.init(
    {
      comment: DataTypes.TEXT,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_post_answer_comments",
    }
  );
  return c_post_answer_comments;
};
