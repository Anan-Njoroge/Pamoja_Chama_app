import { Router } from 'express';

import { DashboardController } from '../controllers/dashboard.controller';

import { authMiddleware } from '@/middleware/auth.middleware';

import { treasurerMiddleware } from '@/middleware/treasurer.middleware';

const router = Router();

const controller =
  new DashboardController();

router.use(authMiddleware);

router.get(

  '/member',

  controller.getMemberDashboard,

);

router.get(

    '/treasurer',
  
    treasurerMiddleware,
  
    controller.getTreasurerDashboard,
  
  );

export default router;