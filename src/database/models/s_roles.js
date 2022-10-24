'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ schools }) {
      this.belongsTo(schools, { foreignKey: 'schoolId', as: 'school' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_roles.init({
    role: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 's_roles',
  });
  return s_roles;
};