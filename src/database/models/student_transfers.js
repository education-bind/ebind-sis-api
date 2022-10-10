"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student_transfers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, schools }) {
      this.belongsTo(edu_users, { foreignKey: "studentId", as: "student" });
      this.belongsTo(schools, { foreignKey: "schoolId", as: "school" });
      this.belongsTo(schools, { foreignKey: "fromSchoolId", as: "fromSchool" });
      this.belongsTo(schools, { foreignKey: "toSchoolId", as: "toSchool" });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  student_transfers.init(
    {
      studentStatus: DataTypes.STRING,
      description: DataTypes.TEXT,
      schoolStatus: DataTypes.STRING,
      transferType: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "student_transfers",
    }
  );
  return student_transfers;
};
