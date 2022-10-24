"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, notification_types }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(notification_types, {
        foreignKey: "notificationTypeId",
        as: "notificationType",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  notifications.init(
    {
      title: DataTypes.STRING,
      isRead: DataTypes.BOOLEAN,
      link: DataTypes.TEXT,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "notifications",
    }
  );
  return notifications;
};
