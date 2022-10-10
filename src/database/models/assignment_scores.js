"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class assignment_scores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users,
      s_classes,
      assignments,
      score_flags,
      score_types,
    }) {
      this.belongsTo(edu_users, { foreignKey: "studentId", as: "student" });
      this.belongsTo(s_classes, { foreignKey: "classId", as: "class" });
      this.belongsTo(score_flags, { foreignKey: "flagId", as: "flag" });
      this.belongsTo(score_types, {
        foreignKey: "scoreTypeId",
        as: "scoreType",
      });
      this.belongsTo(assignments, {
        foreignKey: "assignmentId",
        as: "assignment",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  assignment_scores.init(
    {
      takeAssignment: DataTypes.BOOLEAN,
      score: DataTypes.STRING,
      comment: DataTypes.TEXT,
      isMarked: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "assignment_scores",
    }
  );
  return assignment_scores;
};
