import { GroupsRepository } from '../repositories/groups.repository';

import { toGroupDto } from '../mappers/groups.mapper';

import { CreateGroupDto } from '../types/groups.types';

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

}