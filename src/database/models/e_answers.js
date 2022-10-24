'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class e_answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ e_questions }) {
      this.belongsTo(e_questions, { foreignKey: 'eQuestionId', as: 'eLearningQuestion' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_answers.init({
    answer: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'e_answers',
  });
  return e_answers;
};