import type {
    NextFunction,
    Request,
    Response,
  } from 'express';
  
  import { ApiError } from '@/shared/errors/ApiError';
  
  import { ApiResponse } from '@/shared/responses/ApiResponse';
  
  export function errorHandler(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    if (
      error instanceof ApiError
    ) {
      return res
        .status(error.statusCode)
        .json(
          ApiResponse.failure(
            error.message,
          ),
        );
    }
  
    console.error(error);
  
    return res
      .status(500)
      .json(
        ApiResponse.failure(
          'Internal server error.',
        ),
      );
  }