import { Router } from 'express';
// eslint-disable-next-line import/named
import { homeController } from '../controllers/HomeController';

const router = new Router();
router.get('/', homeController.index);

export default router;
