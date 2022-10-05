'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_post_reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_post_reports.init({
    userId: DataTypes.INTEGER,
    cPostId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    reviewed: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_post_reports',
  });
  return c_post_reports;
};