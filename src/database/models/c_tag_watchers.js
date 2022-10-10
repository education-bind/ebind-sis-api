"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_tag_watchers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, c_tags }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(c_tags, { foreignKey: "cTagId", as: "cTag" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_tag_watchers.init(
    {
      cTagId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "c_tag_watchers",
    }
  );
  return c_tag_watchers;
};
