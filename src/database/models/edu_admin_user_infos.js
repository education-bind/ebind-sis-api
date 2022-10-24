"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class edu_admin_user_infos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  edu_admin_user_infos.init(
    {
      identityNumber: DataTypes.STRING,
      role: DataTypes.STRING,
      identityNumberType: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
      verificationToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "edu_admin_user_infos",
    }
  );
  return edu_admin_user_infos;
};
