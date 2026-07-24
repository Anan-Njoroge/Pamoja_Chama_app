import { BaseRepository } from "@/shared/database/BaseRepository";

import { CreateNotificationDto } from "../types/notifications.types";

export class NotificationsRepository extends BaseRepository {

  /**
   * ============================================================================
   * Create Notification
   * ============================================================================
   */

  async createNotification(

    dto: CreateNotificationDto,

  ) {

    const { data, error } =

      await this.db

        .from("notifications")

        .insert({

          user_id: dto.userId,

          group_id:

            dto.groupId ?? null,

          type: dto.type,

          title: dto.title,

          message: dto.message,

        })

        .select()

        .single();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * User Notifications
   * ============================================================================
   */

  async getUserNotifications(

    userId: string,

  ) {

    const { data, error } =

      await this.db

        .from("notifications")

        .select("*")

        .eq("user_id", userId)

        .order(

          "created_at",

          {

            ascending: false,

          },

        );

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Unread Notifications
   * ============================================================================
   */

  async getUnreadNotifications(

    userId: string,

  ) {

    const { data, error } =

      await this.db

        .from("notifications")

        .select("*")

        .eq("user_id", userId)

        .eq("is_read", false)

        .order(

          "created_at",

          {

            ascending: false,

          },

        );

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Find Notification
   * ============================================================================
   */

  async findById(

    notificationId: string,

  ) {

    const { data, error } =

      await this.db

        .from("notifications")

        .select("*")

        .eq("id", notificationId)

        .maybeSingle();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Mark Read
   * ============================================================================
   */

  async markAsRead(

    notificationId: string,

  ) {

    const { data, error } =

      await this.db

        .from("notifications")

        .update({

          is_read: true,

        })

        .eq("id", notificationId)

        .select()

        .single();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Mark All Read
   * ============================================================================
   */

  async markAllAsRead(

    userId: string,

  ) {

    const { error } =

      await this.db

        .from("notifications")

        .update({

          is_read: true,

        })

        .eq("user_id", userId)

        .eq("is_read", false);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Delete Notification
   * ============================================================================
   */

  async deleteNotification(

    notificationId: string,

  ) {

    const { error } =

      await this.db

        .from("notifications")

        .delete()

        .eq("id", notificationId);

    this.handleError(error);

  }

}