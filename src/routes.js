/**
 * Construção de todas as rotas da aplicacao
 */
import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

/**
 * Podemos passar o Middleware de auth para proteger todas as rotas a partir dessa
 * declaração, ou podemos passar como segundo parâmetro de cada rota como no exemplo abaixo
 * routes.put('/users', authMiddleware, UserController.update);
 */
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
