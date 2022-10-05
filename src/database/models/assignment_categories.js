'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class assignment_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  assignment_categories.init({
    schoolFaciltyId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    color: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'assignment_categories',
  });
  return assignment_categories;
};