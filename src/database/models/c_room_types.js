"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_room_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ c_room_plans }) {
      this.belongsTo(c_room_plans, {
        foreignKey: "cRoomPlanId",
        as: "cRoomPlan",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_room_types.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_room_types",
    }
  );
  return c_room_types;
};
