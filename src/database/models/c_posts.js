'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_posts.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    isForRoom: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_posts',
  });
  return c_posts;
};