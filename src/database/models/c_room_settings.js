'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_room_settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_room_settings.init({
    cRoomId: DataTypes.INTEGER,
    userLimit: DataTypes.INTEGER,
    locked: DataTypes.BOOLEAN,
    invite: DataTypes.BOOLEAN,
    posting: DataTypes.BOOLEAN,
    hidden: DataTypes.BOOLEAN,
    color: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_room_settings',
  });
  return c_room_settings;
};