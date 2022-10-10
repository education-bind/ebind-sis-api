"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class e_course_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ e_course_sections, e_assignments }) {
      this.belongsTo(e_course_sections, {
        foreignKey: "eCourseSectionId",
        as: "eLearningCourseSection",
      });
      this.belongsTo(e_assignments, {
        foreignKey: "eAssignmentId",
        as: "eLearningAssignment",
      });
    }
    toJSON() {
      return {
        ...this.get(),
        eCourseSectionId: undefined,
        eAssignmentId: undefined,
      };
    }
  }
  e_course_assignments.init(
    {
      eCourseSectionId: DataTypes.INTEGER,
      eAssignmentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "e_course_assignments",
    }
  );
  return e_course_assignments;
};
