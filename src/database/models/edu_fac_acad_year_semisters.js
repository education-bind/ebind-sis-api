"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class edu_fac_acad_year_semisters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_fac_acad_years }) {
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
  edu_fac_acad_year_semisters.init(
    {
      name: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      isValid: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "edu_fac_acad_year_semisters",
    }
  );
  return edu_fac_acad_year_semisters;
};
