'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edu_fac_acad_years extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  edu_fac_acad_years.init({
    eduFacultyId: DataTypes.INTEGER,
    eduFacClassId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    isValid: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_fac_acad_years',
  });
  return edu_fac_acad_years;
};