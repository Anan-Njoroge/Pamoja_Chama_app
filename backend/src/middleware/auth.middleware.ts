import {

    Request,
  
    Response,
  
    NextFunction,
  
  } from 'express';
  
  import { supabase } from '@/config/database';
  
  import { AppError } from '@/shared/errors/AppError';
  
  export async function authMiddleware(
  
    req: Request,
  
    _res: Response,
  
    next: NextFunction,
  
  ) {
  
    try {
  
      const authorization =
  
        req.headers.authorization;
  
      if (!authorization) {
  
        throw new AppError(
  
          'Missing authorization header.',
  
          401,
  
        );
  
      }
  
      const token = authorization.replace(
  
        'Bearer ',
  
        '',
  
      );
  
      const {
  
        data,
  
        error,
  
      } = await supabase.auth.getUser(token);
  
      if (error || !data.user) {
  
        throw new AppError(
  
          'Invalid access token.',
  
          401,
  
        );
  
      }
  
      req.user = {
  
        id: data.user.id,
  
        email: data.user.email ?? '',
  
      };
  
      next();
  
    }
  
    catch (error) {
  
      next(error);
  
    }
  
  }