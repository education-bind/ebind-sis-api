"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  countries.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        msg: "Country name already exist",
      },
      active: DataTypes.BOOLEAN,
      code: {
        type: DataTypes.STRING,
        unique: true,
      },
      extension: {
        type: DataTypes.STRING,
        unique: true,
      },
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "countries",
    }
  );
  return countries;
};
