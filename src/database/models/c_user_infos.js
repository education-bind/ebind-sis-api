'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_user_infos extends Model {
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
  c_user_infos.init({
    identityNumber: DataTypes.STRING,
    identityNumberType: DataTypes.STRING,
    isVerfied: DataTypes.BOOLEAN,
    verficationToken: DataTypes.TEXT,
    authProvider: DataTypes.STRING,
    reputation: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'c_user_infos',
  });
  return c_user_infos;
};