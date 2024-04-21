const sequelize = require('./app/database/sequelize')
const Prefix = require('./app/models/Prefix')

sequelize.sync({ alter: true })