"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class edu_fac_class_modules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_faculties, edu_fac_classes }) {
      this.belongsTo(edu_faculties, {
        foreignKey: "eduFacultyId",
        as: "educationFaculty",
      });
      this.belongsTo(edu_fac_classes, {
        foreignKey: "eduFacClassId",
        as: "educationFaculityClass",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  edu_fac_class_modules.init(
    {
      name: DataTypes.STRING,
      abbreviation: DataTypes.STRING,
      description: DataTypes.TEXT,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "edu_fac_class_modules",
    }
  );
  return edu_fac_class_modules;
};
