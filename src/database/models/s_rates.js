'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  s_rates.init({
    guardianIdId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    rate: DataTypes.INTEGER,
    review: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 's_rates',
  });
  return s_rates;
};