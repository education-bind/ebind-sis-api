"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class e_assignment_attempts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, e_assignments }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(e_assignments, {
        foreignKey: "eAssignmentId",
        as: "eLearningAssignment",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_assignment_attempts.init(
    {
      number: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "e_assignment_attempts",
    }
  );
  return e_assignment_attempts;
};
