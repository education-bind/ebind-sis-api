"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student_displines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, schools, edu_fac_acad_year_semisters }) {
      this.belongsTo(edu_users, { foreignKey: "studentId", as: "student" });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
      this.belongsTo(edu_fac_acad_year_semisters, {
        foreignKey: "eduFacAcadYearSemId",
        as: "educationFacultyAcademicYearSemister",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  student_displines.init(
    {
      displineScore: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "student_displines",
    }
  );
  return student_displines;
};
