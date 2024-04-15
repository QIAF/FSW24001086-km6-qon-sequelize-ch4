'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    name: DataTypes.STRING,
    sewa: DataTypes.FLOAT,
    ukuran: DataTypes.INTEGER,
    foto: {
      type: DataTypes.TEXT,
      defaultValue : "car-default.jpg",

    }
  },
  {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};