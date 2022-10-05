'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_transfers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student_transfers.init({
    studentId: DataTypes.INTEGER,
    fromSchoolId: DataTypes.INTEGER,
    toSchoolId: DataTypes.INTEGER,
    studentStatus: DataTypes.STRING,
    description: DataTypes.TEXT,
    schoolStatus: DataTypes.STRING,
    transferType: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'student_transfers',
  });
  return student_transfers;
};