"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_user_permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, schools }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_user_permissions.init(
    {
      permissionTypeId: DataTypes.INTEGER,
      permissionType: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_user_permissions",
    }
  );
  return s_user_permissions;
};
