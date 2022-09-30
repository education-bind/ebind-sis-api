'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edu_announcements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  edu_announcements.init({
    title: DataTypes.STRING,
    message: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
    link: DataTypes.TEXT,
    publish: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_announcements',
  });
  return edu_announcements;
};