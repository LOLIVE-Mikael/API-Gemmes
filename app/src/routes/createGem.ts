import { Express, Request, Response } from 'express';
import { Gem } from '../db/sequelize';
import { UniqueConstraintError, ValidationError } from 'sequelize';

/**
 * @swagger
 * /api/gemmes:
 *   post:
 *     summary: Créer une nouvelle gemme
 *     tags: [Gemmes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom de la gemme
 *                 example: Rubis
 *               color:
 *                 type: string
 *                 description: Couleur de la gemme
 *                 example: Rouge
 *               rarity:
 *                 type: string
 *                 description: Couleur de la gemme
 *                 enum:
 *                    - Rare
 *                    - Commun
 *                    - Peu commun
 *                    - Très rare
 *                 example: Rare
 *             required:
 *               - name
 *               - color
 *     responses:
 *       200:
 *         description: Gemme créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La gemme Ruby a bien été créée.
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
 *       400:
 *         description: Erreur de validation ou gemme déjà existante
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La gemme existe déjà.
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       path:
 *                         type: string
 *                         example: name
 *                       message:
 *                         type: string
 *                         example: La gemme existe déjà.
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La gemme n'a pas pu être ajoutée. Réessayez dans quelques instants.
 *                 data:
 *                   type: object
 *                   additionalProperties: true
 */

const createGem = (app: Express) => {
  app.post('/api/gemmes', async (req: Request, res: Response) => {
    try {
      const gem = await Gem.create(req.body);
      const message = `La gemme ${gem.name} a bien été créée.`;
      res.json({ message, data: gem });
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        res.status(400).json({
          message: 'La gemme existe déjà.',
          errors: [{ path: error.errors[0].path, message: error.errors[0].message }]
        });
      } else if (error instanceof ValidationError) {
        res.status(400).json({
          message: 'Erreur de validation.',
          errors: error.errors.map(err => ({
            path: err.path,
            message: err.message
          }))
        });
      } else {
        console.error('Erreur lors de la création de la gemme :', error);
        const message = `La gemme n'a pas pu être ajoutée. Réessayez dans quelques instants.`;
        res.status(500).json({ message, data: error });
      }
    }
  });
};

export default createGem;
