"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pet_Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pet_Tags.init(
    {
      pet_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pet_Tags",
    }
  );
  return Pet_Tags;
};
