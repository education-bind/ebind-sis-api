'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_class_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  s_class_assignments.init({
    schoolClassId: DataTypes.INTEGER,
    assignmentId: DataTypes.INTEGER,
    eduFacAcadYearSemId: DataTypes.INTEGER,
    assignmentDueDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 's_class_assignments',
  });
  return s_class_assignments;
};