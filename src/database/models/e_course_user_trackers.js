"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class e_course_user_trackers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, e_courses, e_course_sections }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(e_courses, {
        foreignKey: "eCourseId",
        as: "eLearningCourse",
      });
      this.belongsTo(e_course_sections, {
        foreignKey: "eCourseSectionId",
        as: "eLearningCourseSection",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_course_user_trackers.init(
    {
      eCourseSectionType: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "e_course_user_trackers",
    }
  );
  return e_course_user_trackers;
};
