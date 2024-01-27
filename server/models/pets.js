"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pets.init(
    {
      name: DataTypes.STRING,
      weight: DataTypes.DOUBLE(8, 2),
      age: DataTypes.INTEGER(11),
      user_id: DataTypes.INTEGER,
      breed_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pets",
    }
  );
  return Pets;
};
