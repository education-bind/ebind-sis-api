'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edu_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_user_types, countries }) {

      this.belongsTo(edu_user_types, { foreignKey: 'userTypeId', as: 'userType' });
      this.belongsTo(countries, { foreignKey: 'communityCountryId', as: 'communityCountry' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  edu_users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    userName: {
      type: DataTypes.STRING,
      unique: true,
    },
    mailingAddress: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    profileImage: DataTypes.TEXT,
    gender: DataTypes.ENUM(
      'male',
      'female',
      '',
    ),
    birthDate: DataTypes.DATE,
    password: DataTypes.STRING,
    passwordChangedAt: DataTypes.DATE,
    passwordResetToken: DataTypes.TEXT,
    passwordResetExpires: DataTypes.STRING,
    twoFA: DataTypes.BOOLEAN,
    fixedNavBar: DataTypes.BOOLEAN,
    darkMode: DataTypes.BOOLEAN,
    miniSidenav: DataTypes.BOOLEAN,
    sidenavColor: DataTypes.STRING,
    sidenavType: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_users',
  });
  return edu_users;
};