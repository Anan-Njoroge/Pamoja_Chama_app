import type {
    Request,
    Response,
    NextFunction,
  } from 'express';
  
  import { AppError } from '@/shared/errors/AppError';
  
  export function errorMiddleware(
  
    error: unknown,
  
    _req: Request,
  
    res: Response,
  
    _next: NextFunction,
  
  ) {
  
    if (error instanceof AppError) {
  
      return res.status(error.statusCode).json({
  
        success: false,
  
        message: error.message,
  
      });
  
    }
  
    console.error(error);
  
    return res.status(500).json({
  
      success: false,
  
      message: 'Internal Server Error',
  
    });
  
  }