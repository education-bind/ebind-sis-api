'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class e_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users }) {
      this.belongsTo(edu_users, { foreignKey: 'ownerId', as: 'owner' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_assignments.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    abbreviation: DataTypes.STRING,
    duration: DataTypes.BOOLEAN,
    time: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'e_assignments',
  });
  return e_assignments;
};