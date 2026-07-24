import {
    Request,
    Response,
  } from 'express';
  
  import { AppError } from '@/shared/errors/AppError';
  import { asyncHandler } from '@/shared/utils/asyncHandler';
  
  import { NotificationsService } from '../services/notifications.service';
  
  const notificationsService =
    new NotificationsService();
  
  /**
   * ============================================================================
   * Get Notifications
   * ============================================================================
   */
  export const getNotifications = asyncHandler(
  
    async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const user = req.user;
  
      if (!user) {
  
        throw new AppError(
  
          'Unauthorized.',
  
          401,
  
        );
  
      }
  
      const notifications =
  
        await notificationsService.getNotifications(
  
          user.id,
  
        );
  
      return res.status(200).json({
  
        success: true,
  
        data: notifications,
  
      });
  
    },
  
  );
  
  /**
   * ============================================================================
   * Mark Notification Read
   * ============================================================================
   */
  export const markAsRead = asyncHandler(
  
    async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const notificationId =
  
        Array.isArray(req.params.id)
  
          ? req.params.id[0]
  
          : req.params.id;
  
      const notification =
  
        await notificationsService.markAsRead(
  
          notificationId,
  
        );
  
      return res.status(200).json({
  
        success: true,
  
        message:
  
          'Notification marked as read.',
  
        data: notification,
  
      });
  
    },
  
  );