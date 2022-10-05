'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_class_modules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  s_class_modules.init({
    schoolClassId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 's_class_modules',
  });
  return s_class_modules;
};