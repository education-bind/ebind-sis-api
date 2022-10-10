"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, c_room_types, countries }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(c_room_types, {
        foreignKey: "cRoomTypeId",
        as: "cRoomType",
      });
      this.belongsTo(countries, {
        foreignKey: "countryId",
        as: "country",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_rooms.init(
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_rooms",
    }
  );
  return c_rooms;
};
