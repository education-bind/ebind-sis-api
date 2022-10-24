"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student_attendances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools,
      edu_fac_acad_year_semisters,
      s_class_timetables,
    }) {
      this.belongsTo(edu_users, { foreignKey: "studentId", as: "student" });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
      this.belongsTo(s_class_timetables, {
        foreignKey: "schoolClassTimetableId",
        as: "schoolClassTimetable",
      });
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
  student_attendances.init(
    {
      status: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "student_attendances",
    }
  );
  return student_attendances;
};
