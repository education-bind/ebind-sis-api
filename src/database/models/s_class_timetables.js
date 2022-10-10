"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_class_timetables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      schools,
      edu_fac_acad_year_semisters,
      school_classes,
    }) {
      this.belongsTo(edu_users, { foreignKey: "teacherId", as: "teacher" });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
      this.belongsTo(school_classes, {
        foreignKey: "schoolClassId",
        as: "schoolClass",
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
  s_class_timetables.init(
    {
      startTime: DataTypes.DATE,
      endTime: DataTypes.STRING,
      description: DataTypes.TEXT,
      moduleId: DataTypes.INTEGER,
      moduleType: DataTypes.STRING,
      day: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_class_timetables",
    }
  );
  return s_class_timetables;
};
