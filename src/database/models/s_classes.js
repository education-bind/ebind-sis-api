"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools,
      edu_fac_acad_years,
      edu_fac_classes,
    }) {
      this.belongsTo(edu_users, {
        foreignKey: "representerId",
        as: "representer",
      });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
      this.belongsTo(edu_fac_classes, {
        foreignKey: "eduFacultyClassId",
        as: "eduFacultyClass",
      });
      this.belongsTo(edu_fac_acad_years, {
        foreignKey: "eduFacAcadYearId",
        as: "educationFacultyAcademicYear",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_classes.init(
    {
      name: DataTypes.STRING,
      abbreviation: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_classes",
    }
  );
  return s_classes;
};
