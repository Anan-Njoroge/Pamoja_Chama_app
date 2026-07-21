import { Router } from 'express';

import { authMiddleware } from '@/middleware/auth.middleware';

import {

  createContribution,

  getMyContributions,

  getPendingContributions,

  approveContribution,

  rejectContribution,

} from '../controllers/contributions.controller';

const router = Router();

router.use(authMiddleware);

/**
 * ============================================================================
 * Contributions
 * ============================================================================
 */

router.post(

  '/',

  createContribution,

);

router.get(

  '/',

  getMyContributions,

);

router.get(

  '/pending',

  getPendingContributions,

);

router.patch(

  '/:id/approve',

  approveContribution,

);

router.patch(

  '/:id/reject',

  rejectContribution,

);

export default router;