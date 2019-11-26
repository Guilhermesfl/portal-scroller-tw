import { Router } from 'express';
import ScrollerController from './app/controllers/ScrollerController';

const routes = new Router();

routes.get('/', ScrollerController.index);

export default routes;