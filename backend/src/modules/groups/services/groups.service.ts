import { AppError } from '@/shared/errors/AppError';

import { toGroupDto } from '../mappers/groups.mapper';
import { GroupsRepository } from '../repositories/groups.repository';
import { CreateGroupDto } from '../types/groups.types';

export class GroupsService {

  constructor(

    private readonly repository =
      new GroupsRepository(),

  ) {}

  /**
   * ============================================================================
   * Create Group
   * ============================================================================
   */
  async createGroup(

    creatorId: string,

    dto: CreateGroupDto,

  ) {

    const group =
      await this.repository.createGroup(

        creatorId,

        dto,

      );

    await this.repository.addCreatorAsAdmin(

      group.id,

      creatorId,

    );

    return toGroupDto(group);

  }

  /**
   * ============================================================================
   * Get Groups Created By User
   * ============================================================================
   */
  async getGroups(

    userId: string,

  ) {

    const groups =
      await this.repository.findByCreator(

        userId,

      );

    return groups.map(

      toGroupDto,

    );

  }

  /**
   * ============================================================================
   * Get Single Group
   * ============================================================================
   */
  async getGroup(

    id: string,

  ) {

    const group =
      await this.repository.findById(

        id,

      );

    return toGroupDto(group);

  }

  /**
   * ============================================================================
   * Invite Member
   * ============================================================================
   */
  async inviteMember(

    groupId: string,

    email: string,

  ) {

    const profile =
      await this.repository.findProfileByEmail(

        email,

      );

    if (!profile) {

      throw new AppError(

        'User not found.',

        404,

      );

    }

    const exists =
      await this.repository.memberExists(

        groupId,

        profile.id,

      );

    if (exists) {

      throw new AppError(

        'Member already exists.',

        400,

      );

    }

    return await this.repository.inviteMember(

      groupId,

      profile.id,

    );

  }

  /**
   * ============================================================================
   * Get Members
   * ============================================================================
   */
  async getMembers(

    groupId: string,

  ) {

    return await this.repository.getMembers(

      groupId,

    );

  }

}