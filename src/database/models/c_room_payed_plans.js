'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_room_payed_plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_room_payed_plans.init({
    roomId: DataTypes.INTEGER,
    cRoomPlanId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_room_payed_plans',
  });
  return c_room_payed_plans;
};