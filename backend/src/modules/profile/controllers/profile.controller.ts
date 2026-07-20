import {
    Request,
    Response,
    NextFunction,
  } from 'express';
  
  import { AppError } from '@/shared/errors/AppError';
  
  import { ProfileService } from '../services/profile.service';
  import { updateProfileSchema } from '../validators/profile.validator';
  
  export class ProfileController {
  
    private readonly service =
      new ProfileService();
  
    /**
     * ==========================================================================
     * Get Authenticated User Profile
     * ==========================================================================
     */
  
    getProfile = async (
      req: Request,
      res: Response,
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
  
        const profile =
          await this.service.getProfile(
            user.id,
          );
  
        return res.status(200).json({
  
          success: true,
  
          message: 'Profile retrieved successfully.',
  
          data: profile,
  
        });
  
      }
  
      catch (error) {
  
        next(error);
  
      }
  
    };
  
    /**
     * ==========================================================================
     * Update Authenticated User Profile
     * ==========================================================================
     */
  
    updateProfile = async (
      req: Request,
      res: Response,
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
  
        const dto =
          updateProfileSchema.parse(
            req.body,
          );
  
        const profile =
          await this.service.updateProfile(
            user.id,
            dto,
          );
  
        return res.status(200).json({
  
          success: true,
  
          message: 'Profile updated successfully.',
  
          data: profile,
  
        });
  
      }
  
      catch (error) {
  
        next(error);
  
      }
  
    };
  
  }