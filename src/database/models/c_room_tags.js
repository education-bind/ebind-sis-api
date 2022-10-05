'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_room_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_room_tags.init({
    cTagId: DataTypes.INTEGER,
    cRoomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'c_room_tags',
  });
  return c_room_tags;
};