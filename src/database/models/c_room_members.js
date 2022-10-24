"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_room_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, c_rooms }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(c_rooms, { foreignKey: "cRoomId", as: "cRoom" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_room_members.init(
    {
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_room_members",
    }
  );
  return c_room_members;
};
