'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LandingPages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      keyword: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      analytics: {
        type: Sequelize.TEXT
      },
      affid: {
        type: Sequelize.STRING
      },
      facebookcode: {
        type: Sequelize.TEXT
      },
      noscript: {
        type: Sequelize.TEXT
      },
      mainurl: {
        type: Sequelize.STRING
      },
      redirect: {
        type: Sequelize.STRING
      },
      h1: {
        type: Sequelize.STRING
      },
      h2: {
        type: Sequelize.STRING
      },
      button1: {
        type: Sequelize.STRING
      },
      button2: {
        type: Sequelize.STRING
      },
      button3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LandingPages');
  }
};