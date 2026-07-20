import { Router } from 'express';

import { authMiddleware } from '@/middleware/auth.middleware';

import { ProfileController } from '../controllers/profile.controller';

const router = Router();

const controller = new ProfileController();

router.use(authMiddleware);

router.get(

  '/',

  controller.getProfile,

);

router.patch(

  '/',

  controller.updateProfile,

);

export default router;