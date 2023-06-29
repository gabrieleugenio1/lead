const { DataTypes } = require("sequelize");
const db = require("../database/conexao");

const User = db.define('user', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
    
})

module.exports = User;