'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_tags.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'c_tags',
  });
  return c_tags;
};