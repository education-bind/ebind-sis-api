"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_class_modules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ s_classes, schools }) {
      this.belongsTo(s_classes, { foreignKey: "schoolClassId", as: "class" });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_class_modules.init(
    {
      name: DataTypes.STRING,
      abbreviation: DataTypes.STRING,
      description: DataTypes.TEXT,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_class_modules",
    }
  );
  return s_class_modules;
};
