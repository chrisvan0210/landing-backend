'use strict';
const dbConfig = require('../config/config');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: process.env.DB_HOST || "localhost",
    dialect: 'mysql',
    logging: false,
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

const connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = connectToDB;