const {Sequelize} = require('sequelize');
const conexao = new Sequelize({
    database: 'leads',
    username: 'root',
    password: '1234',
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = conexao;