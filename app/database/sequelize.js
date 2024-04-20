const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const host = process.env.DB_HOST
const password = process.env.DB_PASSWORD
const dialect = process.env.DB_DIALECT

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect
});

module.exports = sequelize