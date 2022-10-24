"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class assignment_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ s_faculties, schools }) {
      this.belongsTo(s_faculties, {
        foreignKey: "schoolFaciltyId",
        as: "schoolFacilty",
      });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  assignment_categories.init(
    {
      name: DataTypes.STRING,
      abbreviation: DataTypes.STRING,
      color: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "assignment_categories",
    }
  );
  return assignment_categories;
};
