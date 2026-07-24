import { Router } from 'express';

import authRoutes from '@/modules/auth/routes/auth.routes';
import profileRoutes from '@/modules/profile/routes/profile.routes';
import groupsRoutes from '@/modules/groups/routes/groups.routes';
import contributionsRoutes from '@/modules/contributions/routes/contributions.routes';
import notificationsRoutes from '@/modules/notifications/routes/notifications.routes';
import reportsRoutes from '@/modules/reports/routes/reports.routes';
import meetingsRoutes
from '@/modules/meetings/routes/meetings.routes';
import dashboardRoutes from '@/modules/dashboard/routes/dashboard.routes';


const router = Router();

router.use("/auth", authRoutes);

router.use("/profile", profileRoutes);

router.use("/groups", groupsRoutes);

router.use("/contributions", contributionsRoutes);

router.use(
  "/notifications",

  notificationsRoutes,
);

router.use(
  '/reports',
  reportsRoutes,
);

router.use(
  '/meetings',
  meetingsRoutes,
);

router.use(

  '/dashboard',

  dashboardRoutes,

);

export default router;
