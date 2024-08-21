require('dotenv').config();
const { Sequelize } = require('sequelize');
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USERNAME;
const dbName = process.env.DB_NAME;
const dbPass = process.env.DB_PASSWORD;




const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mysql'
});

module.exports = sequelize;