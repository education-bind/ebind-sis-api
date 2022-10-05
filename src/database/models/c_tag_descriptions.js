'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_tag_descriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_tag_descriptions.init({
    cTagId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    accurate: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_tag_descriptions',
  });
  return c_tag_descriptions;
};