import { Router } from 'express';

import { authRoutes } from './modules/auth';

import { profileRoutes } from './modules/profile';

const router = Router();

router.use(

  '/auth',

  authRoutes,

);

router.use(

  '/profile',

  profileRoutes,

);

export default router;