'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class assignment_scores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  assignment_scores.init({
    classId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    assignmentId: DataTypes.INTEGER,
    takeAssignment: DataTypes.BOOLEAN,
    score: DataTypes.STRING,
    comment: DataTypes.TEXT,
    flagId: DataTypes.INTEGER,
    isMarked: DataTypes.BOOLEAN,
    scoreTypeId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'assignment_scores',
  });
  return assignment_scores;
};