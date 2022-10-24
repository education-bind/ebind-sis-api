"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_tag_descriptions extends Model {
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
  c_tag_descriptions.init(
    {
      description: DataTypes.TEXT,
      accurate: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_tag_descriptions",
    }
  );
  return c_tag_descriptions;
};
