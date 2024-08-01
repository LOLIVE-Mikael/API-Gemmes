const { Gem } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/gemmes/:id', (req, res) => {
    Gem.findByPk(req.params.id)
      .then(gem => {
        if(gem === null) {
            const message = `La gemme demandée n'existe pas. Réessayez avec un autre identifiant.`
            return res.status(404).json({ message })
          }

        const message = 'Une gemme a bien été trouvé.'
        res.json({ message, data: gem })
      })
      .catch(error => {
        const message = `Les gemmes n'ont pas pu être récupérées. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}