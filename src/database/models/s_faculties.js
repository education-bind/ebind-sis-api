"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_faculties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ schools, edu_faculties }) {
      this.belongsTo(edu_faculties, {
        foreignKey: "educationFacultyId",
        as: "educationFaculty",
      });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_faculties.init(
    {
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_faculties",
    }
  );
  return s_faculties;
};
