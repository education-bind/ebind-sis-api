'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_attendances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student_attendances.init({
    studentId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    eduFacAcadYearSemId: DataTypes.INTEGER,
    schoolClassTimetibleId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'student_attendances',
  });
  return student_attendances;
};