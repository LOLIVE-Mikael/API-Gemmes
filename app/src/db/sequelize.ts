/* L’API Rest et la Base de données : Créer un modèle Sequelize */
import { Sequelize } from 'sequelize';
import GemModel from '../models/gem'; 
import gems from './mock-gem'; // Importation des données mockées
  
const sequelize = new Sequelize('gem_db', 'user', 'password', {
  host: 'db',
  dialect: 'mysql',
  port: 3306,
  logging: false
})
  
const Gem = GemModel(sequelize)
  
const initDb = async () => {
  try {
    // Synchroniser la base de données
    await sequelize.sync({ force: true });

    // Insérer les données
    for (const gem of gems) {
      try {
        const createdGem = await Gem.create({
          id: gem.id,
          name: gem.name,
          color: gem.color,
          rarity: gem.rarity
        });
    //  console.log(createdGem.toJSON());
    }catch (error) {
      console.error(`Erreur lors de l'insertion de la gemme ${gem.name}:`, error);
    }
  }

    console.log('La base de données a bien été initialisée !');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données:', error);
  }
};

export { initDb, Gem};