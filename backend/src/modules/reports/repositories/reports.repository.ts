import { BaseRepository } from '@/shared/database/BaseRepository';

export class ReportsRepository extends BaseRepository {

  /**
   * ============================================================================
   * Group Header
   * ============================================================================
   */
  async getGroupHeader(
    groupId: string,
  ) {

    const { data, error } =
      await this.db
        .from('groups')
        .select(`
          id,
          name,
          logo_url,
          location,
          currency
        `)
        .eq('id', groupId)
        .single();

    this.handleError(
      error,
      'Unable to load group information.',
    );

    return this.ensureFound(data);

  }

  /**
   * ============================================================================
   * Contribution Report
   * ============================================================================
   */
  async getContributionReport(
    groupId: string,
  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .select(`
          amount,
          payment_date,
          status,

          profiles!contributions_member_id_fkey(
            full_name
          ),

          contribution_types(
            name
          ),

          payment_methods(
            name
          )
        `)
        .eq('group_id', groupId)
        .is('deleted_at', null)
        .order(
          'payment_date',
          { ascending: false },
        );

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Members Report
   * ============================================================================
   */
  async getMembersReport(
    groupId: string,
  ) {

    const { data, error } =
      await this.db
        .from('group_members')
        .select(`
          role,
          status,
          joined_at,

          profiles(
            full_name
          )
        `)
        .eq('group_id', groupId)
        .order(
          'joined_at',
          { ascending: true },
        );

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Financial Summary
   * ============================================================================
   */
  async getFinancialSummary(
    groupId: string,
  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .select(`
          amount,
          status
        `)
        .eq('group_id', groupId)
        .is('deleted_at', null);

    this.handleError(error);

    return data ?? [];

  }

}