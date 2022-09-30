'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guardian_infos extends Model {
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
  guardian_infos.init({
    identityNumber: DataTypes.STRING,
    identityNumberType: DataTypes.STRING,
    isVerfied: DataTypes.BOOLEAN,
    verificationToken: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'guardian_infos',
  });
  return guardian_infos;
};