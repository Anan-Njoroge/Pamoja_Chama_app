import { Router } from 'express';

import { authMiddleware } from '@/middleware';

import { GroupsController } from '../controllers/groups.controller';

const router = Router();

const controller =
  new GroupsController();

router.post(

  '/',

  authMiddleware,

  controller.createGroup,

);

router.get(

  '/',

  authMiddleware,

  controller.getGroups,

);

router.get(

  '/:id',

  authMiddleware,

  controller.getGroup,

);

export default router;