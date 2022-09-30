'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class two_factor_auths extends Model {
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
  two_factor_auths.init({
    authType: DataTypes.STRING,
    securityKey: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'two_factor_auths',
  });
  return two_factor_auths;
};