'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edu_facilties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ countries }) {
      this.belongsTo(countries, { foreignKey: 'countryId', as: 'country' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  edu_facilties.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    logoimage: DataTypes.TEXT,
    abbreviation: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_facilties',
  });
  return edu_facilties;
};