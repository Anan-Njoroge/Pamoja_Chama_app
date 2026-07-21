import { Router } from 'express';

import { authMiddleware } from '@/middleware/auth.middleware';

import {
  getGroupContributions,
  getMemberContributions,
  recordContribution,
} from '../controllers/contributions.controller';

const router = Router();

router.use(authMiddleware);

router.post(
  '/',
  recordContribution,
);

router.get(
  '/group/:groupId',
  getGroupContributions,
);

router.get(
  '/member/:memberId',
  getMemberContributions,
);

export default router;