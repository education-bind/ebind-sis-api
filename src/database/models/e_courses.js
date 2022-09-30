'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class e_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users }) {
      this.belongsTo(edu_users, { foreignKey: 'userId', as: 'creator' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_courses.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    author: DataTypes.STRING,
    pubDate: DataTypes.DATE,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'e_courses',
  });
  return e_courses;
};