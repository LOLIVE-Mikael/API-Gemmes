const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const path = require('path');

const app = express()
const port = 3000

const swaggerDocs = require('./swagger');

app
  .use(favicon(path.join(__dirname, 'favicon.ico')))    .use(morgan('dev'))
    .use(bodyParser.json())

sequelize.initDb()

swaggerDocs(app);

require('./src/routes/findAllGems')(app)
require('./src/routes/findGemByPk')(app)
require('./src/routes/createGem')(app)
require('./src/routes/updateGem')(app)
require('./src/routes/deleteGem')(app)

// On gère les erreurs 404.
app.use((req, res) => {
  const message = 'Impossible de trouver la ressource demandée !';
  res.status(404).json({ message });
});


app.listen(port, () =>console.log(`Notre application est démarrée sur : http://localhost:${port}`))

