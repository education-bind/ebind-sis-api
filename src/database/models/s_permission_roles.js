'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_permission_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  s_permission_roles.init({
    schoolRoleId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    eduPermissionId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 's_permission_roles',
  });
  return s_permission_roles;
};