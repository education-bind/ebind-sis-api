'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edu_fac_class_groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  edu_fac_class_groups.init({
    eduFacultyId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_fac_class_groups',
  });
  return edu_fac_class_groups;
};