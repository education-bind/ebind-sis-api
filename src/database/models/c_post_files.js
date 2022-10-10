"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_post_files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ c_posts }) {
      this.belongsTo(c_posts, { foreignKey: "cPostId", as: "cPost" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_post_files.init(
    {
      file: DataTypes.TEXT,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_post_files",
    }
  );
  return c_post_files;
};
