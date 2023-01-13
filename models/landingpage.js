'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LandingPage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LandingPage.init({
    meta1: DataTypes.STRING,
    meta2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LandingPage',
  });
  return LandingPage;
};