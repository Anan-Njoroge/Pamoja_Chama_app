/**
 * ============================================================================
 * Authentication Controller
 * ============================================================================
 */

import {
  Request,
  Response,
} from 'express';

import { authService } from './auth.service';

import { ApiResponse } from '@/shared/responses/ApiResponse';

class AuthController {

  async syncProfile(
    req: Request,
    res: Response,
  ) {

    const profile =
      await authService.syncProfile({

        id: req.user!.id,

        full_name:
          req.body.full_name,

        avatar_url:
          req.body.avatar_url,

        role: 'member',

        is_active: true,

      });

    return res.json(

      ApiResponse.success(
        'Profile synchronized successfully.',
        profile,
      ),

    );

  }

  async me(
    req: Request,
    res: Response,
  ) {

    const profile =
      await authService.getProfile(
        req.user!.id,
      );

    return res.json(

      ApiResponse.success(
        'Profile retrieved successfully.',
        profile,
      ),

    );

  }

}

export const authController =
  new AuthController();