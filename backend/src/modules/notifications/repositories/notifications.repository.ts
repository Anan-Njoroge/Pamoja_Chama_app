import { BaseRepository } from '@/shared/database/BaseRepository';

export class NotificationsRepository extends BaseRepository {

  async findByUser(
    userId: string,
  ) {

    const { data, error } =
      await this.db
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', {
          ascending: false,
        });

    this.handleError(error);

    return data ?? [];

  }

  async markAsRead(
    id: string,
  ) {

    const { data, error } =
      await this.db
        .from('notifications')
        .update({

          is_read: true,

        })
        .eq('id', id)
        .select()
        .single();

    this.handleError(error);

    return this.ensureFound(data);

  }

  async createNotification(

    userId: string,

    groupId: string | null,

    type: string,

    title: string,

    message: string,

  ) {

    const { data, error } =
      await this.db
        .from('notifications')
        .insert({

          user_id: userId,

          group_id: groupId,

          type,

          title,

          message,

        })
        .select()
        .single();

    this.handleError(error);

    return this.ensureFound(data);

  }

}