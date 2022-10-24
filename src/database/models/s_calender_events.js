'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_calender_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ edu_users, schools }) {
      this.belongsTo(edu_users, { foreignKey: 'userId', as: 'user' });
      this.belongsTo(schools, { foreignKey: 'schoolId', as: 'school' });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  s_calender_events.init({
    active: DataTypes.BOOLEAN,
    summary: DataTypes.TEXT,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    startDateTime: DataTypes.STRING,
    endDateTime: DataTypes.STRING,
    timeZone: DataTypes.TEXT,
    createdBy: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 's_calender_events',
  });
  return s_calender_events;
};