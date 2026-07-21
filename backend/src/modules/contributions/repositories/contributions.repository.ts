import { BaseRepository } from '@/shared/database/BaseRepository';

import { CreateContributionDto } from '../types/contributions.types';

export class ContributionsRepository extends BaseRepository {

  async create(

    dto: CreateContributionDto,

    recordedBy: string,

  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .insert({

          group_id: dto.groupId,

          member_id: dto.memberId,

          amount: dto.amount,

          contribution_date: dto.contributionDate,

          payment_method: dto.paymentMethod,

          notes: dto.notes,

          recorded_by: recordedBy,

        })
        .select()
        .single();

    this.handleError(

      error,

      'Unable to record contribution.',

    );

    return this.ensureFound(data);

  }

  async findByGroup(

    groupId: string,

  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .select('*')
        .eq('group_id', groupId)
        .order(

          'contribution_date',

          { ascending: false },

        );

    this.handleError(error);

    return data ?? [];

  }

  async findByMember(

    memberId: string,

  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .select('*')
        .eq('member_id', memberId)
        .order(

          'contribution_date',

          { ascending: false },

        );

    this.handleError(error);

    return data ?? [];

  }

}