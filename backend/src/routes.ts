import { Router } from 'express';

import authRoutes from '@/modules/auth/routes/auth.routes';
import profileRoutes from '@/modules/profile/routes/profile.routes';
import groupsRoutes from '@/modules/groups/routes/groups.routes';
import contributionsRoutes from '@/modules/contributions/routes/contributions.routes';

const router = Router();

router.use('/auth', authRoutes);

router.use('/profile', profileRoutes);

router.use('/groups', groupsRoutes);

router.use(
    '/contributions',
    contributionsRoutes,
  );

export default router;