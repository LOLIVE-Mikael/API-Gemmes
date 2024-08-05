import { Express } from 'express';
import findAllGems from './findAllGems';
import findGemById from './findGemById'
import createGem from './createGem';
import updateGem from './updateGem';
import deleteGem from './deleteGem';

const configureRoutes = (app: Express) => {

  findAllGems(app);
  findGemById(app);
  createGem(app);
  updateGem(app);
  deleteGem(app); 
};

export default configureRoutes;
