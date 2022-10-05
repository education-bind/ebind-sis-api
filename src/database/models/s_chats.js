'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  s_chats.init({
    schoolId: DataTypes.INTEGER,
    userFromId: DataTypes.INTEGER,
    userToId: DataTypes.INTEGER,
    messageType: DataTypes.STRING,
    date: DataTypes.DATE,
    messagReplyId: DataTypes.INTEGER,
    file: DataTypes.TEXT,
    fileType: DataTypes.STRING,
    textMessage: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 's_chats',
  });
  return s_chats;
};