import { BaseRepository } from '@/shared/database/BaseRepository';

import { CreateGroupDto } from '../types/groups.types';

export class GroupsRepository extends BaseRepository {

  async createGroup(

    creatorId: string,

    dto: CreateGroupDto,

  ) {

    const { data, error } =
      await this.db
        .from('groups')
        .insert({

          name: dto.name,

          description: dto.description,

          currency: dto.currency,

          meeting_day: dto.meetingDay,

          meeting_time: dto.meetingTime,

          created_by: creatorId,

        })
        .select()
        .single();

    this.handleError(
      error,
      'Unable to create group.',
    );

    return this.ensureFound(data);

  }

  async addCreatorAsAdmin(

    groupId: string,

    userId: string,

  ) {

    const { error } =
      await this.db
        .from('group_members')
        .insert({

          group_id: groupId,

          user_id: userId,

          role: 'group_admin',

        });

    this.handleError(
      error,
      'Unable to register group creator.',
    );

  }

  async findByCreator(
    userId: string,
  ) {

    const { data, error } =
      await this.db
        .from('groups')
        .select('*')
        .eq('created_by', userId);

    this.handleError(error);

    return data ?? [];

  }

  async findById(
    id: string,
  ) {

    const { data, error } =
      await this.db
        .from('groups')
        .select('*')
        .eq('id', id)
        .single();

    this.handleError(error);

    return this.ensureFound(
      data,
      'Group not found.',
    );

  }

}