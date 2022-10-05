'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_user_reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_user_reports.init({
    userId: DataTypes.INTEGER,
    reportedUserId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    reviewed: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_user_reports',
  });
  return c_user_reports;
};