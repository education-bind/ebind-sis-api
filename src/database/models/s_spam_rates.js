"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_spam_rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, s_rates }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(s_rates, { foreignKey: "sRateId", as: "schoolRate" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_spam_rates.init(
    {
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_spam_rates",
    }
  );
  return s_spam_rates;
};
