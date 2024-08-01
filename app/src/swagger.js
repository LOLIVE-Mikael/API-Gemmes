const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gemmes',
      version: '1.0.0',
      description: 'API pour gérer les gemmes.',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Serveur local',
      },
    ],
  },
  // Le chemin des fichiers qui contiennent les annotations Swagger
  apis: ['./src/routes/*.js'], // Modifiez le chemin en fonction de la structure de votre projet
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = swaggerDocs;
