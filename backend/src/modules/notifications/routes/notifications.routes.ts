import { Router } from 'express';

import { authMiddleware } from '@/middleware/auth.middleware';

import {

  getNotifications,

  markAsRead,

} from '../controllers/notifications.controller';

const router = Router();

router.use(authMiddleware);

/**
 * ============================================================================
 * Notifications
 * ============================================================================
 */

router.get(

  '/',

  getNotifications,

);

router.patch(

  '/:id/read',

  markAsRead,

);

export default router;