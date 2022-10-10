"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class e_score_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, e_assignments, e_assignment_attempts }) {
      this.belongsTo(edu_users, { foreignKey: "userId", as: "user" });
      this.belongsTo(e_assignments, {
        foreignKey: "eAssignmentId",
        as: "eLearningAssignment",
      });
      this.belongsTo(e_assignment_attempts, {
        foreignKey: "attemptId",
        as: "attempts",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  e_score_records.init(
    {
      score: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "e_score_records",
    }
  );
  return e_score_records;
};
