'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_displines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student_displines.init({
    studentId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    eduFacAcadYearSemId: DataTypes.INTEGER,
    displineScore: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'student_displines',
  });
  return student_displines;
};