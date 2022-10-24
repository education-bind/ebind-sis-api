'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class e_course_topics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ e_course_sections }) {
      this.belongsTo(e_course_sections, { foreignKey: 'eCourseSectionId', as: 'eLearningCourseSection' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_course_topics.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'e_course_topics',
  });
  return e_course_topics;
};