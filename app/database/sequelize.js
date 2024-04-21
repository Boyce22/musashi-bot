const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME
const username = process.env.DB_USER
const host = process.env.DB_HOST
const password = process.env.DB_PASSWORD
const dialect = process.env.DB_DIALECT
const port = process.env.DB_PORT

const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: dialect,
});

module.exports = sequelize