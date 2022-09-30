'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class e_course_user_documents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ eCourseSections }) {
      this.belongsTo(eCourseSections, { foreignKey: 'eCourseSectionId', as: 'eLearningCourseSetion' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_course_user_documents.init({
    title: DataTypes.STRING,
    docName: DataTypes.STRING,
    docPath: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'e_course_user_documents',
  });
  return e_course_user_documents;
};