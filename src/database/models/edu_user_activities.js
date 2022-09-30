'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edu_user_activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users }) {
      this.belongsTo(edu_users, { foreignKey: 'userId', as: 'user' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  edu_user_activities.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_user_activities',
  });
  return edu_user_activities;
};