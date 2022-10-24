"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ assignment_categories, score_types, e_assignments }) {
      this.belongsTo(assignment_categories, {
        foreignKey: "assignmentCategoryId",
        as: "assignmentCategory",
      });
      this.belongsTo(score_types, {
        foreignKey: "scoreTypeId",
        as: "scoreType",
      });
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
  assignments.init(
    {
      name: DataTypes.STRING,
      scoreEntryPoints: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      publishScoreDate: DataTypes.DATE,
      active: DataTypes.BOOLEAN,
      moduleId: DataTypes.INTEGER,
      moduleType: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      assignmentType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "assignments",
    }
  );
  return assignments;
};
