import { Request, Response, NextFunction } from 'express';

import { AuthService } from '../services/auth.service';

import { createProfileSchema } from '../validators/auth.validator';

export class AuthController {
  private readonly service =
    new AuthService();

  createProfile = async (
    req: Request,

    res: Response,

    next: NextFunction,
  ) => {
    try {
      const body =
        createProfileSchema.parse(req.body);

      const profile =
        await this.service.createOrGetProfile(
          body,
        );

      return res.status(200).json({
        success: true,

        data: profile,
      });
    } catch (error) {
      next(error);
    }
  };
}