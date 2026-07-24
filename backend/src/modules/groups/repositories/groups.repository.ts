import { BaseRepository } from '@/shared/database/BaseRepository';

import {
  CreateGroupDto,
  InviteMemberDto,
} from '../types/groups.types';

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

    return this.ensureFound(data);

  }

  /**
   * ============================================================================
   * Register Group Creator
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
          status: 'active',
        });

    this.handleError(
      error,
      'Unable to register group creator.',
    );

  }

  /**
   * ============================================================================
   * Create Profile
   * ============================================================================
   */
  async createProfile(
    dto: InviteMemberDto,
  ) {

    const { data, error } =
      await this.db
        .from('profiles')
        .insert({
          full_name: dto.fullName,
          national_id: dto.nationalId,
          phone: dto.phone,
          account_status: 'pending',
        })
        .select()
        .single();

    this.handleError(
      error,
      'Unable to create member profile.',
    );

    return this.ensureFound(data);

  }

  /**
   * ============================================================================
   * Add Member To Group
   * ============================================================================
   */
  async addMemberToGroup(
    groupId: string,
    memberId: string,
  ) {

    const { data, error } =
      await this.db
        .from('group_members')
        .insert({
          group_id: groupId,
          user_id: memberId,
          role: 'member',
          status: 'active',
        })
        .select()
        .single();

    this.handleError(
      error,
      'Unable to add member to group.',
    );

    return this.ensureFound(data);

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
   * Check Member Exists
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
   * Get Group Members
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
            national_id,
            phone,
            avatar_url,
            account_status
          )
        `)
        .eq('group_id', groupId);

    this.handleError(error);

    return data ?? [];

  }

}