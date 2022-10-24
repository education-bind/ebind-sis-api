"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student_languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, edu_languages }) {
      this.belongsTo(edu_users, { foreignKey: "studentId", as: "student" });
      this.belongsTo(edu_languages, {
        foreignKey: "eduLanguageId",
        as: "eduLanguage",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  student_languages.init(
    {
      type: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "student_languages",
    }
  );
  return student_languages;
};
