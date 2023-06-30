const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '1.0.0',
        title: 'API LEADS',
        description: `API Node.js documentada com Swagger\n${process.env.API_URL}`,
    },
    host: `${process.env.API_HOST}`,
    basePath: '/v1',
    schemes: [`${process.env.API_HTTP}`],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes.js']; // Substitua './app.js' pelo caminho correto para o arquivo principal da sua aplicação

swaggerAutogen(outputFile, endpointsFiles, doc);