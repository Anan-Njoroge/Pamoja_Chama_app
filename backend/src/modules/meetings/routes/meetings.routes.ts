import { Router } from 'express';

import { MeetingsController } from '../controllers/meetings.controller';

import { authMiddleware } from '@/middleware/auth.middleware';

import { treasurerMiddleware } from '@/middleware/treasurer.middleware';

const router = Router();

const controller = new MeetingsController();

/*
|--------------------------------------------------------------------------
| All meeting routes require authentication
|--------------------------------------------------------------------------
*/

router.use(authMiddleware);

/*
|--------------------------------------------------------------------------
| Read
|--------------------------------------------------------------------------
*/

router.get(
  '/group/:groupId',
  controller.getMeetings,
);

router.get(
  '/group/:groupId/upcoming',
  controller.getUpcomingMeetings,
);

router.get(
  '/:id',
  controller.getMeeting,
);

router.get(
  '/:id/attendance',
  controller.getAttendance,
);

/*
|--------------------------------------------------------------------------
| Treasurer
|--------------------------------------------------------------------------
*/

router.post(
  '/',
  treasurerMiddleware,
  controller.createMeeting,
);

router.patch(
  '/:id',
  treasurerMiddleware,
  controller.updateMeeting,
);

router.patch(
  '/:id/cancel',
  treasurerMiddleware,
  controller.cancelMeeting,
);

router.patch(
  '/:id/complete',
  treasurerMiddleware,
  controller.completeMeeting,
);

router.post(
  '/:id/attendance',
  treasurerMiddleware,
  controller.recordAttendance,
);

export default router;