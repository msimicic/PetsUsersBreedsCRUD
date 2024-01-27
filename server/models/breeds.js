"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Breeds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Breeds.init(
    {
      name: DataTypes.STRING(30)
    },
    {
      sequelize,
      modelName: "Breeds",
    }
  );
  return Breeds;
};
