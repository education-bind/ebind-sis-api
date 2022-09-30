'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class e_assignment_user_answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, eAssignments, eAssignmentAttempts, eAnswers }) {
      this.belongsTo(edu_users, { foreignKey: 'userId', as: 'user' });
      this.belongsTo(eAssignments, { foreignKey: 'eAssignmentId', as: 'eLearningAssignment' });
      this.belongsTo(eAssignmentAttempts, { foreignKey: 'attemptId', as: 'attempts' });
      this.belongsTo(eAnswers, { foreignKey: 'eAnswerId', as: 'eAnswer' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_assignment_user_answers.init({
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'e_assignment_user_answers',
  });
  return e_assignment_user_answers;
};