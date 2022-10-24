"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class c_room_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ c_rooms, e_assignments, score_types }) {
      this.belongsTo(c_rooms, { foreignKey: "cRoomId", as: "cRoom" });
      this.belongsTo(e_assignments, {
        foreignKey: "eAssignmentId",
        as: "eLearningAssignment",
      });
      this.belongsTo(score_types, {
        foreignKey: "scoreTypeId",
        as: "scoreType",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  c_room_assignments.init(
    {
      name: DataTypes.STRING,
      scoreEntryPoints: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      publishScoreDate: DataTypes.DATE,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "c_room_assignments",
    }
  );
  return c_room_assignments;
};
