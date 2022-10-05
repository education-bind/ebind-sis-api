'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_acad_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, schools }) {
      this.belongsTo(edu_users, { foreignKey: 'studentId', as: 'student' });
      this.belongsTo(schools, { foreignKey: 'schoolId', as: 'school' });
      this.belongsTo(eduFacAcadYearSemisters, { foreignKey: 'eduFacAcadYearSemId', as: 'AcademicYearSemister' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  student_acad_histories.init({
    entryDate: DataTypes.DATE,
    exitDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'student_acad_histories',
  });
  return student_acad_histories;
};