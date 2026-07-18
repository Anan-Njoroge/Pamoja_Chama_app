/**
 * ============================================================================
 * Authentication Middleware
 * ============================================================================
 */

import {
  NextFunction,
  Request,
  Response,
} from 'express';

import { ApiResponse } from '@/shared/responses/ApiResponse';

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {

  const authorization =
    req.headers.authorization;

  if (!authorization) {

    return res
      .status(401)
      .json(
        ApiResponse.failure(
          'Authorization token is required.',
        ),
      );

  }

  const token =
    authorization.replace(
      'Bearer ',
      '',
    );

  /**
   * TODO:
   * Verify Supabase JWT.
   */

  req.user = {

    id: 'temporary-user-id',

  };

  next();

}