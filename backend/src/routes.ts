import { Router } from 'express';

import authRoutes from '@/modules/auth/routes/auth.routes';
import profileRoutes from '@/modules/profile/routes/profile.routes';
import groupsRoutes from '@/modules/groups/routes/groups.routes';

const router = Router();

router.use('/auth', authRoutes);

router.use('/profile', profileRoutes);

router.use('/groups', groupsRoutes);

export default router;