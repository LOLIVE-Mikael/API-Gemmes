const { Gem } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')

module.exports = (app) => {
  app.post('/api/gemmes', (req, res) => {
    Gem.create(req.body)
      .then(gem => {
        const message = `La gemme ${gem.name} a bien été créée.`
        res.json({ message, data: gem })
      })
      .catch(error => {
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({
            message: 'La gemme existe déjà.',
            errors: [{ path: error.errors[0].path, message: error.errors[0].message }]
          });
        }
        if (error instanceof ValidationError) {
          return res.status(400).json({
            message: 'Erreur de validation.',
            errors: error.errors.map(err => ({
              path: err.path,
              message: err.message
            }))
          });
        }
        console.error('Erreur lors de la création de la gemme :', error);
        const message = `La gemme n'a pas pu être ajoutée. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
