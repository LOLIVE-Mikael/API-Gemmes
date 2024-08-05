import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

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
        url: 'http://localhost:3000',
        description: 'Serveur local',
      },
    ],
  },
  // Le chemin des fichiers qui contiennent les annotations Swagger
  apis: ['./app/src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default swaggerDocs;