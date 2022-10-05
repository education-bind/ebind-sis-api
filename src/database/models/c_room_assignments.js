'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class c_room_assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  c_room_assignments.init({
    name: DataTypes.STRING,
    cRoomId: DataTypes.INTEGER,
    eAssignmentId: DataTypes.INTEGER,
    scoreTypeId: DataTypes.INTEGER,
    scoreEntryPoints: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    publishScoreDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'c_room_assignments',
  });
  return c_room_assignments;
};