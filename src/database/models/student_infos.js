'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_infos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ schools, edu_users }) {
      this.belongsTo(schools, { foreignKey: 'schoolId', as: 'currentSchool' });
      this.belongsTo(edu_users, { foreignKey: 'userId', as: 'user' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  student_infos.init({
    fatherPhone: DataTypes.INTEGER,
    matherPhone: DataTypes.INTEGER,
    fatherName: DataTypes.STRING,
    matherName: DataTypes.STRING,
    homeAddress: DataTypes.STRING,
    identityNumber: DataTypes.STRING,
    identityNumberType: DataTypes.STRING,
    bloodType: DataTypes.STRING,
    countryOfBirth: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    studentNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student_infos',
  });
  return student_infos;
};