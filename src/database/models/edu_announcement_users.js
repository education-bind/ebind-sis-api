'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edu_announcement_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, edu_announcements }) {
      this.belongsTo(edu_users, { foreignKey: 'userId', as: 'user' });
      this.belongsTo(edu_announcements, { foreignKey: 'announcementId', as: 'announcement' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  edu_announcement_users.init({
    active: DataTypes.BOOLEAN,
    isRead: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_announcement_users',
  });
  return edu_announcement_users;
};