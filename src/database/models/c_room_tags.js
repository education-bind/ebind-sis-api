"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_room_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ c_tags, c_rooms }) {
      this.belongsTo(c_tags, { foreignKey: "cTagId", as: "cTag" });
      this.belongsTo(c_rooms, { foreignKey: "cRoomId", as: "cRoom" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_room_tags.init(
    {
      cTagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "c_room_tags",
    }
  );
  return c_room_tags;
};
