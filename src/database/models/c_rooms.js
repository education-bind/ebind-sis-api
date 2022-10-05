'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_rooms.init({
    userId: DataTypes.INTEGER,
    cRoomTypeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_rooms',
  });
  return c_rooms;
};