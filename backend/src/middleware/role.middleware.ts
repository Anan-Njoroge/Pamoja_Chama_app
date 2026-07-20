import {
    Request,
    Response,
    NextFunction,
  } from 'express';
  
  import { AppError } from '@/shared/errors/AppError';
  
  import { getUserRole } from '@/shared/utils/authorization';
  
  import { Role } from '@/shared/constants/roles';
  
  export function requireRole(
    role: Role,
  ) {
  
    return async (
  
      req: Request,
  
      _res: Response,
  
      next: NextFunction,
  
    ) => {
  
      try {
  
        const user = req.user;
  
        if (!user) {
  
          throw new AppError(
            'Unauthorized.',
            401,
          );
  
        }
  
        const currentRole =
          await getUserRole(
            user.id,
          );
  
        if (!currentRole) {
  
          throw new AppError(
            'Profile not found.',
            404,
          );
  
        }
  
        if (currentRole !== role) {
  
          throw new AppError(
            'Forbidden.',
            403,
          );
  
        }
  
        next();
  
      }
  
      catch (error) {
  
        next(error);
  
      }
  
    };
  
  }