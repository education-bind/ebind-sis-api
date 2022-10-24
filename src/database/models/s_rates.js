"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, schools }) {
      this.belongsTo(edu_users, { foreignKey: "guardianId", as: "guardian" });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_rates.init(
    {
      rate: DataTypes.INTEGER,
      review: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_rates",
    }
  );
  return s_rates;
};
