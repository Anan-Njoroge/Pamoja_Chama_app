/**
 * ============================================================================
 * Validation Middleware
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Validates incoming request bodies using Zod schemas.
 *
 * ============================================================================
 */

import type {
  Request,
  Response,
  NextFunction,
} from 'express';

import type { ZodSchema } from 'zod';

import { ApiResponse } from '@/shared/responses/ApiResponse';

export function validate(
  schema: ZodSchema,
) {

  return (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {

    const result =
      schema.safeParse(req.body);

    if (!result.success) {

      return res.status(400).json(

        ApiResponse.failure(
          result.error.issues[0]?.message ??
          'Validation failed.',
        ),

      );

    }

    req.body = result.data;

    next();

  };

}