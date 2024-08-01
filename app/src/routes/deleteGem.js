const { Gem } = require('../db/sequelize')
  
module.exports = (app) => {
  app.delete('/api/gemmes/:id', (req, res) => {
    Gem.findByPk(req.params.id)
      .then(gem => {
        if(!gem) {
          const message = `La gemme demandée n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }
        return Gem.destroy({ where: { id: gem.id } })
          .then(_ => {
            const message = `La gemme avec l'identifiant n°${gem.id} a bien été supprimée.`
            res.json({message, data: gemDeleted })
          })
        })
        .catch(error => {
          const message = `La gemme n'a pas pu être supprimée. Réessayez dans quelques instants.`
          res.status(500).json({ message, data: error })
      })
  })
}