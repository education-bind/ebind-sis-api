'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guardian_students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, guardian_relationships }) {
      this.belongsTo(edu_users, { foreignKey: 'guardianId', as: 'guardian' });
      this.belongsTo(edu_users, { foreignKey: 'studentId', as: 'student' });
      this.belongsTo(guardian_relationships, { foreignKey: 'guardianRelationshipId', as: 'relationship' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  guardian_students.init({
    liveWith: DataTypes.BOOLEAN,
    schoolPickup: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'guardian_students',
  });
  return guardian_students;
};