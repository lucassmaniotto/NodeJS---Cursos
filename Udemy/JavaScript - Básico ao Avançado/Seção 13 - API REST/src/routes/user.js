import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.post('/', userController.create);
routes.get('/', loginRequired, userController.index);
routes.get('/:id', userController.show);
routes.put('/:id', userController.update);
routes.delete('/:id', userController.delete);

export default routes;
