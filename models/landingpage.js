'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LandingPages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LandingPages.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    keyword: DataTypes.STRING,
    description: DataTypes.STRING,
    analytics: DataTypes.STRING,
    affid: DataTypes.STRING,
    facebookcode: DataTypes.STRING,
    noscript: DataTypes.STRING,
    mainurl: DataTypes.STRING,
    redirect: DataTypes.STRING,
    h1: DataTypes.STRING,
    h2: DataTypes.STRING,
    button1: DataTypes.STRING,
    button2: DataTypes.STRING,
    button3: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'LandingPages',
  });
  return LandingPages;
};