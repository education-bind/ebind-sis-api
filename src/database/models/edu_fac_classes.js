'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edu_fac_classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  edu_fac_classes.init({
    eduFacultyClassGroupId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_fac_classes',
  });
  return edu_fac_classes;
};