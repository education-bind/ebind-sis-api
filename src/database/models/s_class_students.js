"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_class_students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, schools, s_classes }) {
      this.belongsTo(edu_users, { foreignKey: "studentId", as: "student" });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
      this.belongsTo(s_classes, { foreignKey: "schoolClassId", as: "class" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_class_students.init(
    {
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "s_class_students",
    }
  );
  return s_class_students;
};
