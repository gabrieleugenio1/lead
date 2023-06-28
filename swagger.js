const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '1.0.0',
        title: 'API LEADS',
        description: `API Node.js documentada com Swagger\n${process.env.API_URL}`,
    },
    basePath: '/v1',
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes.js']; // Substitua './app.js' pelo caminho correto para o arquivo principal da sua aplicação

swaggerAutogen(outputFile, endpointsFiles, doc);