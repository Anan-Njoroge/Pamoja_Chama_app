import { AppError } from '@/shared/errors/AppError';

import { AuthRepository } from '@/modules/auth/repositories/auth.repository';

import {
  generateActivationCode,
  hashCode,
} from '@/shared/security';

import { toGroupDto } from '../mappers/groups.mapper';
import { GroupsRepository } from '../repositories/groups.repository';

import {
  CreateGroupDto,
  InviteMemberDto,
} from '../types/groups.types';

export class GroupsService {

  constructor(

    private readonly repository =
      new GroupsRepository(),

    private readonly authRepository =
      new AuthRepository(),

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
   *
   * Treasurer onboarding flow:
   *
   * 1. Ensure National ID is unique.
   * 2. Create profile.
   * 3. Add member to group.
   * 4. Generate activation code.
   * 5. Hash activation code.
   * 6. Save hash + expiry.
   * 7. Return the plain activation code ONLY once.
   */
  async inviteMember(

    groupId: string,

    dto: InviteMemberDto,

  ) {

    /**
     * ------------------------------------------------------------------------
     * National ID must be unique.
     * ------------------------------------------------------------------------
     */

    const existing =
      await this.authRepository.findByNationalId(

        dto.nationalId,

      );

    if (existing) {

      throw new AppError(

        'National ID is already registered.',

        409,

      );

    }

    /**
     * ------------------------------------------------------------------------
     * Create profile.
     * ------------------------------------------------------------------------
     */

    const profile =
      await this.repository.createProfile(

        dto,

      );

    /**
     * ------------------------------------------------------------------------
     * Add member to the group.
     * ------------------------------------------------------------------------
     */

    await this.repository.addMemberToGroup(

      groupId,

      profile.id,

    );

    /**
     * ------------------------------------------------------------------------
     * Generate activation code.
     * ------------------------------------------------------------------------
     */

    const activationCode =
      generateActivationCode();

    const activationCodeHash =
      await hashCode(

        activationCode,

      );

    const expiresAt =
      new Date(

        Date.now()
        + (7 * 24 * 60 * 60 * 1000),

      ).toISOString();

    /**
     * ------------------------------------------------------------------------
     * Save activation information.
     * ------------------------------------------------------------------------
     */

    await this.authRepository.saveActivationCode(

      profile.id,

      activationCodeHash,

      expiresAt,

    );

    /**
     * ------------------------------------------------------------------------
     * Return onboarding details.
     * ------------------------------------------------------------------------
     */

    return {

      member: profile,

      activationCode,

      expiresAt,

    };

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