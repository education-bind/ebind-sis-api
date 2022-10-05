'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_class_timetables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  s_class_timetables.init({
    schoolClassId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.STRING,
    description: DataTypes.TEXT,
    teacherId: DataTypes.INTEGER,
    moduleId: DataTypes.INTEGER,
    moduleType: DataTypes.STRING,
    day: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 's_class_timetables',
  });
  return s_class_timetables;
};