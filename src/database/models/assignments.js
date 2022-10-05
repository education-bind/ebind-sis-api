'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  assignments.init({
    name: DataTypes.STRING,
    assignmentCategoryId: DataTypes.INTEGER,
    scoreEntryPoints: DataTypes.INTEGER,
    scoreTypeId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    publishScoreDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    moduleId: DataTypes.INTEGER,
    moduleType: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    assignmentType: DataTypes.STRING,
    eAssignmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'assignments',
  });
  return assignments;
};