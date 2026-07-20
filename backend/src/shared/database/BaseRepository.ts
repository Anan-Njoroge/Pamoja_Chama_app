import { PostgrestError } from '@supabase/supabase-js';

import { supabase } from '@/config/database';

import { AppError } from '@/shared/errors/AppError';

export abstract class BaseRepository {

  /**
   * Shared Supabase client.
   */
  protected readonly db = supabase;

  /**
   * Throws an application error if Supabase
   * returns an error.
   */
  protected handleError(
    error: PostgrestError | null,
    message = 'Database operation failed.',
  ): void {

    if (error) {

      throw new AppError(
        `${message} ${error.message}`,
        500,
      );

    }

  }

  /**
   * Ensures a query returned data.
   */
  protected ensureFound<T>(
    data: T | null,
    message = 'Resource not found.',
  ): T {

    if (!data) {

      throw new AppError(
        message,
        404,
      );

    }

    return data;

  }

}