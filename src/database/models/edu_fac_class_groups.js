"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class edu_fac_class_groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_faculties }) {
      this.belongsTo(edu_faculties, {
        foreignKey: "eduFacultyId",
        as: "educationFaculty",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  edu_fac_class_groups.init(
    {
      name: DataTypes.STRING,
      abbreviation: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "edu_fac_class_groups",
    }
  );
  return edu_fac_class_groups;
};
