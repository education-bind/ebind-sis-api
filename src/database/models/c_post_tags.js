'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_post_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_post_tags.init({
    cTagId: DataTypes.INTEGER,
    cPostId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'c_post_tags',
  });
  return c_post_tags;
};