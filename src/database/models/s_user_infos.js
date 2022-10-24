'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_user_infos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, schools, s_user_groups }) {
      this.belongsTo(edu_users, { foreignKey: 'userId', as: 'user' });
      this.belongsTo(schools, { foreignKey: 'schoolId', as: 'school' });
      this.belongsTo(s_user_groups, { foreignKey: 'schoolUserGroupId', as: 'schoolUserGroup' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_user_infos.init({
    identityNumber: DataTypes.STRING,
    identityNumberType: DataTypes.STRING,
    isVerfied: DataTypes.BOOLEAN,
    verificationToken: DataTypes.TEXT,
    accountAccessToken: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 's_user_infos',
  });
  return s_user_infos;
};