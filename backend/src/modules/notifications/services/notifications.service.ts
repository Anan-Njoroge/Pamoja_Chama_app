import { AppError } from "@/shared/errors/AppError";

import { toNotificationDto } from "../mappers/notifications.mapper";

import { NotificationsRepository } from "../repositories/notifications.repository";

import { CreateNotificationDto } from "../types/notifications.types";

export class NotificationsService {

  constructor(

    private readonly repository =
      new NotificationsRepository(),

  ) {}

  /**
   * ============================================================================
   * Create
   * ============================================================================
   */

  async create(

    dto: CreateNotificationDto,

  ) {

    const notification =

      await this.repository.createNotification(

        dto,

      );

    return toNotificationDto(

      notification,

    );

  }

  /**
   * ============================================================================
   * User Notifications
   * ============================================================================
   */

  async getUserNotifications(

    userId: string,

  ) {

    const notifications =

      await this.repository.getUserNotifications(

        userId,

      );

    return notifications.map(

      toNotificationDto,

    );

  }

  /**
   * ============================================================================
   * Unread
   * ============================================================================
   */

  async getUnreadNotifications(

    userId: string,

  ) {

    const notifications =

      await this.repository.getUnreadNotifications(

        userId,

      );

    return notifications.map(

      toNotificationDto,

    );

  }

  /**
   * ============================================================================
   * Mark Read
   * ============================================================================
   */

  async markAsRead(

    notificationId: string,

  ) {

    const notification =

      await this.repository.findById(

        notificationId,

      );

    if (!notification) {

      throw new AppError(

        "Notification not found.",

        404,

      );

    }

    const updated =

      await this.repository.markAsRead(

        notificationId,

      );

    return toNotificationDto(

      updated,

    );

  }

  /**
   * ============================================================================
   * Mark All Read
   * ============================================================================
   */

  async markAllAsRead(

    userId: string,

  ) {

    await this.repository.markAllAsRead(

      userId,

    );

    return {

      success: true,

      message:

        "All notifications marked as read.",

    };

  }

  /**
   * ============================================================================
   * Delete
   * ============================================================================
   */

  async delete(

    notificationId: string,

  ) {

    const notification =

      await this.repository.findById(

        notificationId,

      );

    if (!notification) {

      throw new AppError(

        "Notification not found.",

        404,

      );

    }

    await this.repository.deleteNotification(

      notificationId,

    );

    return {

      success: true,

      message:

        "Notification deleted successfully.",

    };

  }

}