const { Gem } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/api/gemmes/:id', (req, res) => {
    const id = req.params.id
    Gem.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Gem.findByPk(id).then(gem => {
        const message = `La gemme ${gem.name} a bien été modifiéz.`
        res.json({message, data: gem })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
        const message = `La gemme n'a pas pu être modifiée. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}