import { requireRole } from './role.middleware';

import { ROLES } from '@/shared/constants/roles';

export const adminMiddleware =
  requireRole(
    ROLES.ADMIN,
  );