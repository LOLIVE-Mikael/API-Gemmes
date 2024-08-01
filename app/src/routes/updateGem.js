const { Gem } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')

/**
 * @swagger
 * /api/gemmes/{id}:
 *   put:
 *     summary: Mettre à jour une gemme par son ID
 *     tags: [Gemmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la gemme à mettre à jour
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sapphire
 *               color:
 *                 type: string
 *                 example: Blue
 *               rarity:
 *                 type: string
 *                 enum:
 *                   - Rare
 *                   - Commun
 *                 example: Rare
 *             required:
 *               - name
 *               - color
 *               - rarity
 *     responses:
 *       200:
 *         description: La gemme a été modifiée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La gemme Sapphire a bien été modifiée.
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: Sapphire
 *                     color:
 *                       type: string
 *                       example: Blue
 *                     rarity:
 *                       type: string
 *                       enum:
 *                          - Commun
 *                          - Peu commun
 *                          - Rare
 *                          - Très rare
 *                       example: Rare
 *       400:
 *         description: Erreur de validation des données
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erreur de validation.
 *                 data:
 *                   type: object
 *                   additionalProperties: true
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La gemme n'a pas pu être modifiée. Réessayez dans quelques instants.
 *                 data:
 *                   type: object
 *                   additionalProperties: true
 */


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