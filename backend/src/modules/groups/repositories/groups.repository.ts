import { BaseRepository } from '@/shared/database/BaseRepository';

import { CreateGroupDto } from '../types/groups.types';

export class GroupsRepository extends BaseRepository {

  /**
   * ============================================================================
   * Create Group
   * ============================================================================
   */
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

    return this.ensureFound(

      data,

    );

  }

  /**
   * ============================================================================
   * Add Creator As Group Admin
   * ============================================================================
   */
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

  /**
   * ============================================================================
   * Find Groups Created By User
   * ============================================================================
   */
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

  /**
   * ============================================================================
   * Find Group By ID
   * ============================================================================
   */
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

  /**
   * ============================================================================
   * Find Profile By Email
   * ============================================================================
   */
  async findProfileByEmail(

    email: string,

  ) {

    const { data, error } =
      await this.db
        .from('profiles')
        .select('id,email')
        .eq('email', email)
        .single();

    this.handleError(

      error,

      'User not found.',

    );

    return data;

  }

  /**
   * ============================================================================
   * Check If User Is Already A Member
   * ============================================================================
   */
  async memberExists(

    groupId: string,

    userId: string,

  ) {

    const { data, error } =
      await this.db
        .from('group_members')
        .select('id')
        .eq('group_id', groupId)
        .eq('user_id', userId)
        .maybeSingle();

    this.handleError(error);

    return !!data;

  }

  /**
   * ============================================================================
   * Invite Member
   * ============================================================================
   */
  async inviteMember(

    groupId: string,

    userId: string,

  ) {

    const { data, error } =
      await this.db
        .from('group_members')
        .insert({

          group_id: groupId,

          user_id: userId,

          role: 'member',

        })
        .select()
        .single();

    this.handleError(

      error,

      'Unable to invite member.',

    );

    return this.ensureFound(

      data,

    );

  }

  /**
   * ============================================================================
   * Get Members Of A Group
   * ============================================================================
   */
  async getMembers(

    groupId: string,

  ) {

    const { data, error } =
      await this.db
        .from('group_members')
        .select(`
          id,
          role,
          status,
          joined_at,
          profiles (
            id,
            full_name,
            email,
            avatar_url
          )
        `)
        .eq('group_id', groupId);

    this.handleError(error);

    return data ?? [];

  }

}