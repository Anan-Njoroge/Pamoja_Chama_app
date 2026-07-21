import { toContributionDto } from '../mappers/contributions.mapper';
import { ContributionsRepository } from '../repositories/contributions.repository';
import { CreateContributionDto } from '../types/contributions.types';

export class ContributionsService {

  constructor(

    private readonly repository =
      new ContributionsRepository(),

  ) {}

  /**
   * ============================================================================
   * Record Contribution
   * ============================================================================
   */
  async createContribution(

    recordedBy: string,

    dto: CreateContributionDto,

  ) {

    const contribution =
      await this.repository.create(

        dto,

        recordedBy,

      );

    return toContributionDto(
      contribution,
    );

  }

  /**
   * ============================================================================
   * Group Contributions
   * ============================================================================
   */
  async getGroupContributions(

    groupId: string,

  ) {

    const contributions =
      await this.repository.findByGroup(
        groupId,
      );

    return contributions.map(
      toContributionDto,
    );

  }

  /**
   * ============================================================================
   * Member Contributions
   * ============================================================================
   */
  async getMemberContributions(

    memberId: string,

  ) {

    const contributions =
      await this.repository.findByMember(
        memberId,
      );

    return contributions.map(
      toContributionDto,
    );

  }

}