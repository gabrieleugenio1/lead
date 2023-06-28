const express = require('express');
const app = express();

// Documentação
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Configurações do app
require('./config/configsApp')(express, app);


module.exports = app;