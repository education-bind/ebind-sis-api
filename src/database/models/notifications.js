'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notifications.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN,
    link: DataTypes.TEXT,
    notificationTypeId: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'notifications',
  });
  return notifications;
};