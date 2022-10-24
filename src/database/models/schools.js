'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schools extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, countries }) {
      this.belongsTo(countries, { foreignKey: 'countryId', as: 'country' });
      this.belongsTo(edu_users, { foreignKey: 'adminId', as: 'admin' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  schools.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    abbreviation: DataTypes.STRING,
    regDate: DataTypes.DATE,
    logoImage: DataTypes.TEXT,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    city: DataTypes.STRING,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'schools',
  });
  return schools;
};