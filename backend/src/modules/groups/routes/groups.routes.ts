import { Router } from 'express';

import { authMiddleware } from '@/middleware/auth.middleware';

import {
  createGroup,
  getGroups,
  getGroup,
  inviteMember,
  getMembers,
} from '../controllers/groups.controller';

const router = Router();

/**
 * All Group routes require authentication.
 */
router.use(authMiddleware);

/**
 * ============================================================================
 * Groups
 * ============================================================================
 */

router.post(
  '/',
  createGroup,
);

router.get(
  '/',
  getGroups,
);

router.get(
  '/:id',
  getGroup,
);

/**
 * ============================================================================
 * Members
 * ============================================================================
 */

router.get(
  '/:id/members',
  getMembers,
);

router.post(
  '/:id/invite',
  inviteMember,
);

export default router;