import { NotificationsRepository } from '../repositories/notifications.repository';

import { toNotificationDto } from '../mappers/notifications.mapper';

export class NotificationsService {

  constructor(

    private readonly repository =
      new NotificationsRepository(),

  ) {}

  /**
   * ============================================================================
   * Create Notification
   * ============================================================================
   */
  async createNotification(

    userId: string,

    groupId: string | null,

    type: string,

    title: string,

    message: string,

  ) {

    return this.repository.createNotification(

      userId,

      groupId,

      type,

      title,

      message,

    );

  }

  /**
   * ============================================================================
   * Get Notifications
   * ============================================================================
   */
  async getNotifications(
    userId: string,
  ) {

    const notifications =

      await this.repository.findByUser(
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
    id: string,
  ) {

    const notification =

      await this.repository.markAsRead(
        id,
      );

    return toNotificationDto(
      notification,
    );

  }

}