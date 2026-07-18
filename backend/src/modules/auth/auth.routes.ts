import { Router } from 'express';

import { authController } from './auth.controller';

import { authenticate } from '@/middleware/authenticate';

const router = Router();

router.post(
  '/sync-profile',
  authenticate,
  authController.syncProfile,
);

router.get(
  '/me',
  authenticate,
  authController.me,
);

export default router;