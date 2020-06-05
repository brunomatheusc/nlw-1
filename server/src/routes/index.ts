import { Router, response } from 'express';

import ItemsController from '../controllers/ItemsController';
import PointsController from '../controllers/PointsController';

const routes = Router();

const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get('/items', itemsController.create);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;