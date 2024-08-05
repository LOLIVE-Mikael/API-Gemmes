import express, { Request, Response } from 'express';
import path from 'path';
import { initDb } from './db/sequelize';
import configureRoutes from './routes/routes';
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
import swaggerDocs from './swagger';
const port: number = 3000;

const app = express()

//ajout du favicon
/*
app.use(favicon(path.join(__dirname, '../favicon.ico')))
app.use(morgan('dev'))
app.use(bodyParser.json()) */

//initailisation de la base de donnée
initDb()

//swagger de l'API
swaggerDocs(app);

configureRoutes(app);


// On gère les erreurs 404.
app.use((req: Request, res: Response) => {
  const message = 'Impossible de trouver la ressource demandée !';
  res.status(404).json({ message });
});


app.listen(port, () => {
  console.log(`Notre application est démarrée sur : http://localhost:${port}`) 
});
