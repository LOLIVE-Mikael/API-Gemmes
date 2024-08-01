const { Op } = require('sequelize');
const { Gem } = require('../db/sequelize');

module.exports = (app) => {
  app.get('/api/gemmes', async (req, res) => {
    try {
      const { color, rarity, limit } = req.query;

      // Validation des paramètres
      if (color && color.length < 2) {
        return res.status(400).json({ message: 'Le terme de recherche de couleur doit contenir au minimum 2 caractères.' });
      }
      if (rarity && rarity.length < 2) {
        return res.status(400).json({ message: 'Le terme de recherche de rareté doit contenir au minimum 2 caractères.' });
      }

      let parsedLimit = parseInt(limit, 10);
      if (limit && (isNaN(parsedLimit) || parsedLimit <= 0)) {
        return res.status(400).json({ message: 'Le paramètre limit doit être un nombre entier positif.' });
      }

      const options = {
        order: [['name', 'ASC']],
      };

      const whereConditions = {};

      if (color) {
        whereConditions.color = {
          [Op.eq]: color,
        };
      }

      if (rarity) {
        whereConditions.rarity = {
          [Op.eq]: rarity,
        };
      }

      if (limit) {
        options.limit = parseInt(limit);
      }

      // Appliquer les conditions de recherche si elles existent
      if (Object.keys(whereConditions).length > 0) {
        options.where = whereConditions;
      }

      const result = await Gem.findAndCountAll(options);
      const message = 'La liste des gemmes a bien été récupérée.';
      res.json({ message, data: result.rows, count: result.count });
    } catch (error) {
      const message = `La liste des gemmes n'a pas pu être récupérée. Réessayez dans quelques instants.`;
      res.status(500).json({ message, data: error });
    }
  });
};
