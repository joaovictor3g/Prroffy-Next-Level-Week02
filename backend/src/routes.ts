import { Router } from 'express';
import ClassesControler from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';

const routes = Router();
const classesController = new ClassesControler();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index)

export default routes;