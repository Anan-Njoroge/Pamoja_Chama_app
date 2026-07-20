import { GroupsRepository } from '../repositories/groups.repository';

import { toGroupDto } from '../mappers/groups.mapper';

import { CreateGroupDto } from '../types/groups.types';
import { AppError } from '@/shared/errors/AppError';

export class GroupsService {

  constructor(

    private readonly repository =
      new GroupsRepository(),

  ) {}

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
 * Get Group Members
 * ============================================================================
 */
async getMembers(

  groupId: string,

) {

  return this.repository.getMembers(

    groupId,

  );

}

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

  async getGroup(
    id: string,
  ) {

    const group =
      await this.repository.findById(id);

    return toGroupDto(group);

  }

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
  
    return this.repository.inviteMember(
  
      groupId,
  
      profile.id,
  
    );
  
  }
}