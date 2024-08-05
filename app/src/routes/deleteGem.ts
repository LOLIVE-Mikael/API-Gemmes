import { Express, Request, Response } from 'express';
import { Gem } from '../db/sequelize';

/**
 * @swagger
 * /api/gemmes/{id}:
 *   delete:
 *     summary: Supprimer une gemme par son ID
 *     tags: [Gemmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la gemme à supprimer
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Gemme supprimée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La gemme avec l'identifiant n°1 a bien été supprimée.
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: Ruby
 *                     color:
 *                       type: string
 *                       example: Red
 *                     rarity:
 *                       type: string
 *                       enum:
 *                         - Rare
 *                         - Commun
 *                       example: Rare
 *       404:
 *         description: Gemme non trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La gemme demandée n'existe pas. Réessayez avec un autre identifiant.
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La gemme n'a pas pu être supprimée. Réessayez dans quelques instants.
 *                 data:
 *                   type: object
 *                   additionalProperties: true
 */

const deleteGem = (app: Express) => {
  app.delete('/api/gemmes/:id', async (req: Request, res: Response) => {    Gem.findByPk(req.params.id)
    try {
      const id = req.params.id;
      const gem = await Gem.findByPk(id);

      if(!gem) {
        const message = `La gemme demandée n'existe pas. Réessayez avec un autre identifiant.`
        return res.status(404).json({ message })
      }

      await Gem.destroy({ where: { id: gem.id } });
      const message = `La gemme avec l'identifiant n°${gem.id} a bien été supprimée.`
      res.json({message, data: gem })
      
    } catch(error) {
      const message = `La gemme n'a pas pu être supprimée. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    }
  })
};

export default deleteGem;