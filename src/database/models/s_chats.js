"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, schools, s_chats }) {
      this.belongsTo(edu_users, { foreignKey: "userFromId", as: "userFrom" });
      this.belongsTo(edu_users, { foreignKey: "userToId", as: "userTo" });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
      this.belongsTo(s_chats, {
        foreignKey: "messagReplyId",
        as: "messagReply",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_chats.init(
    {
      messageType: DataTypes.STRING,
      date: DataTypes.DATE,
      file: DataTypes.TEXT,
      fileType: DataTypes.STRING,
      textMessage: DataTypes.TEXT,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_chats",
    }
  );
  return s_chats;
};
