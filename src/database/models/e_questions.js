'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class e_questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ e_assignments }) {
      this.belongsTo(e_assignments, { foreignKey: 'eAssignmentId', as: 'eLeaningAssignment' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_questions.init({
    question: DataTypes.STRING,
    questionType: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'e_questions',
  });
  return e_questions;
};