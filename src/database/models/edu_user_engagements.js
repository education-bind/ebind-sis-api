'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edu_user_engagements extends Model {
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
  edu_user_engagements.init({
    page: DataTypes.STRING,
    date: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_user_engagements',
  });
  return edu_user_engagements;
};