const { DataTypes } = require('sequelize');
const db = require('../database/conexao');

const Lead = db.define('lead',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        required: true,
    },
    whatsapp:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true
    },
    interesses:{
        type: DataTypes.JSON,
        allowNull: true
    },
    habilitado:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})


module.exports = Lead;