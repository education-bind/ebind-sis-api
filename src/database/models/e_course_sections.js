'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class e_course_sections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ e_courses }) {
      this.belongsTo(e_courses, { foreignKey: 'eCourseId', as: 'eLearningCourse' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_course_sections.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    sectionType: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'e_course_sections',
  });
  return e_course_sections;
};