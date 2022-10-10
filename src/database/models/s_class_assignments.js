"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_class_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ s_classes, s_class_assignments, edu_fac_acad_years }) {
      this.belongsTo(s_classes, { foreignKey: "schoolClassId", as: "class" });
      this.belongsTo(s_class_assignments, {
        foreignKey: "assignmentId",
        as: "assignment",
      });
      this.belongsTo(edu_fac_acad_years, {
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
  s_class_assignments.init(
    {
      assignmentDueDate: DataTypes.DATE,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_class_assignments",
    }
  );
  return s_class_assignments;
};
