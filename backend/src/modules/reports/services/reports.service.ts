import { ReportsRepository } from '../repositories/reports.repository';

export class ReportsService {

  constructor(

    private readonly repository =
      new ReportsRepository(),

  ) {}

  /**
   * ============================================================================
   * Group Header
   * ============================================================================
   */
  async getGroupHeader(

    groupId: string,

  ) {

    return this.repository.getGroupHeader(

      groupId,

    );

  }

  /**
   * ============================================================================
   * Contribution Report
   * ============================================================================
   */
  async getContributionReport(

    groupId: string,

  ) {

    const rows =

      await this.repository.getContributionReport(

        groupId,

      );

    return rows.map(

      (row: any) => ({

        member:

          row.profiles?.full_name ??

          'Unknown',

        contributionType:

          row.contribution_types?.name ??

          'Unknown',

        paymentMethod:

          row.payment_methods?.name ??

          '-',

        amount:

          Number(row.amount),

        paymentDate:

          row.payment_date,

        status:

          row.status,

      }),

    );

  }

  /**
   * ============================================================================
   * Members Report
   * ============================================================================
   */
  async getMembersReport(

    groupId: string,

  ) {

    const rows =

      await this.repository.getMembersReport(

        groupId,

      );

    return rows.map(

      (row: any) => ({

        member:

          row.profiles?.full_name ??

          'Unknown',

        role:

          row.role,

        status:

          row.status,

        joinedAt:

          row.joined_at,

      }),

    );

  }

  /**
   * ============================================================================
   * Financial Summary
   * ============================================================================
   */
  async getFinancialSummary(

    groupId: string,

  ) {

    const rows =

      await this.repository.getFinancialSummary(

        groupId,

      );

    const total =

      rows.reduce(

        (

          sum: number,

          row: any,

        ) =>

          sum +

          Number(row.amount),

        0,

      );

    return {

      totalContributions:

        total,

      approved:

        rows.filter(

          (x: any) =>

            x.status ===

            'approved',

        ).length,

      pending:

        rows.filter(

          (x: any) =>

            x.status ===

            'pending',

        ).length,

      rejected:

        rows.filter(

          (x: any) =>

            x.status ===

            'rejected',

        ).length,

      records:

        rows.length,

    };

  }

}