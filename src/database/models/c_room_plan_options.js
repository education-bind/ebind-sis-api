'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_room_plan_options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ c_room_plans }) {
      this.belongsTo(c_room_plans, { foreignKey: 'cRoomPlanId', as: 'communityRoomPlan' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_room_plan_options.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_room_plan_options',
  });
  return c_room_plan_options;
};