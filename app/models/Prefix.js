const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Prefix extends Model { }

Prefix.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        prefix: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdBy: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        updatedBy: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },

    },
    {
        sequelize,
        modelName: 'Prefix',
        tableName: 'prefix',
        timestamps: true,
    }
);

module.exports = Prefix;
