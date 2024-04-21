const sequelize = require('./sequelize')
const Prefix = require('../models/Prefix')

sequelize.sync({ alter: true })