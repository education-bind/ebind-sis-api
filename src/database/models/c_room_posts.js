"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_room_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ c_rooms, c_posts }) {
      this.belongsTo(c_rooms, { foreignKey: "cRoomId", as: "cRoom" });
      this.belongsTo(c_posts, { foreignKey: "cPostId", as: "cPost" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_room_posts.init(
    {
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_room_posts",
    }
  );
  return c_room_posts;
};
