"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_post_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ c_tags, c_posts }) {
      this.belongsTo(c_tags, { foreignKey: "cTagId", as: "cTag" });
      this.belongsTo(c_posts, { foreignKey: "cPostId", as: "cPost" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_post_tags.init(
    {
      cTagId: DataTypes.INTEGER,
      cPostId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "c_post_tags",
    }
  );
  return c_post_tags;
};
