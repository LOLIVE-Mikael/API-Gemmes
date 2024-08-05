import { Request, Response, Express } from 'express';
import { Gem } from '../db/sequelize';

/**
 * @swagger
 * /api/gemmes/{id}:
 *   get:
 *     summary: Récupérer une gemme par son ID
 *     tags: [Gemmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la gemme à récupérer
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Une gemme a été trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Une gemme a bien été trouvée.
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
 *                   example: Les gemmes n'ont pas pu être récupérées. Réessayez dans quelques instants.
 *                 data:
 *                   type: object
 *                   additionalProperties: true
 */


const findGemById = (app: Express) => {
  app.get('/api/gemmes/:id', async (req: Request, res: Response) => {
    try {
      const gem = await Gem.findByPk(req.params.id);
      Gem.findByPk(req.params.id)

      if(!gem) {
        const message = `La gemme demandée n'existe pas. Réessayez avec un autre identifiant.`
        return res.status(404).json({ message })
      }
      const message = 'Une gemme a bien été trouvé.'
      res.json({ message, data: gem })
      }catch(error) {
        const message = `Les gemmes n'ont pas pu être récupérées. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      }
  });
};

export default findGemById;