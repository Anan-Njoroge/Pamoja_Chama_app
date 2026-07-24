import { Router } from 'express';

import { authMiddleware } from '@/middleware/auth.middleware'

import { ReportsController } from '../controllers/reports.controller';

const router = Router();

router.use(authMiddleware);

router.get(

  '/:groupId/contributions',

  ReportsController.contributionReport,

);

router.get(

  '/:groupId/members',

  ReportsController.membersReport,

);

router.get(

  '/:groupId/summary',

  ReportsController.financialSummary,

);

export default router;