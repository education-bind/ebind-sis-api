'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_privileges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_privileges.init({
    name: DataTypes.STRING,
    reputationRange: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'c_privileges',
  });
  return c_privileges;
};