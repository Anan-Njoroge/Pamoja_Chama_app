import { BaseRepository } from '@/shared/database/BaseRepository';

import {
  AttendanceDto,
  CreateMeetingDto,
  Meeting,
  UpdateMeetingDto,
} from '../types/meetings.types';

export class MeetingsRepository extends BaseRepository {

  /**
   * ============================================================================
   * Create Meeting
   * ============================================================================
   */
  async createMeeting(

    creatorId: string,

    dto: CreateMeetingDto,

  ) {

    const {
      data,
      error,
    }: {
      data: Meeting | null;
      error: any;
    } = await this.db
      .from('meetings')
      .insert({

        group_id: dto.groupId,

        title: dto.title,

        description: dto.description ?? null,

        location: dto.location ?? null,

        meeting_date: dto.meetingDate,

        created_by: creatorId,

      })
      .select()
      .single();

    this.handleError(
      error,
      'Unable to create meeting.',
    );

    return this.ensureFound(data);

  }

  /**
   * ============================================================================
   * Get Meeting
   * ============================================================================
   */
  async findById(
    meetingId: string,
  ) {

    const {
      data,
      error,
    }: {
      data: Meeting | null;
      error: any;
    } = await this.db
      .from('meetings')
      .select('*')
      .eq('id', meetingId)
      .single();

    this.handleError(error);

    return this.ensureFound(
      data,
      'Meeting not found.',
    );

  }

  /**
   * ============================================================================
   * Group Meetings
   * ============================================================================
   */
  async findByGroup(
    groupId: string,
  ) {

    const { data, error } =
      await this.db
        .from('meetings')
        .select('*')
        .eq('group_id', groupId)
        .order(
          'meeting_date',
          { ascending: true },
        );

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Upcoming Meetings
   * ============================================================================
   */
  async findUpcoming(
    groupId: string,
  ) {

    const { data, error } =
      await this.db
        .from('meetings')
        .select('*')
        .eq('group_id', groupId)
        .eq('status', 'scheduled')
        .gte(
          'meeting_date',
          new Date().toISOString(),
        )
        .order(
          'meeting_date',
          { ascending: true },
        );

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Update Meeting
   * ============================================================================
   */
  async updateMeeting(

    meetingId: string,

    dto: UpdateMeetingDto,

  ) {

    const {
      data,
      error,
    }: {
      data: Meeting | null;
      error: any;
    } = await this.db
      .from('meetings')
      .update({

        title: dto.title,

        description: dto.description,

        location: dto.location,

        meeting_date: dto.meetingDate,

        status: dto.status,

        minutes: dto.minutes,

        updated_at: new Date().toISOString(),

      })
      .eq('id', meetingId)
      .select()
      .single();

    this.handleError(
      error,
      'Unable to update meeting.',
    );

    return this.ensureFound(data);

  }

  /**
   * ============================================================================
   * Record Attendance
   * ============================================================================
   */
  async recordAttendance(

    meetingId: string,

    dto: AttendanceDto,

  ) {

    const { data, error } =
      await this.db
        .from('meeting_attendance')
        .upsert({

          meeting_id: meetingId,

          member_id: dto.memberId,

          status: dto.status,

          checked_in_at:
            new Date().toISOString(),

        })
        .select()
        .single();

    this.handleError(
      error,
      'Unable to record attendance.',
    );

    return data;

  }

  /**
   * ============================================================================
   * Get Attendance
   * ============================================================================
   */
  async getAttendance(
    meetingId: string,
  ) {

    const { data, error } =
      await this.db
        .from('meeting_attendance')
        .select(`
          *,
          profiles(
            id,
            full_name,
            email
          )
        `)
        .eq(
          'meeting_id',
          meetingId,
        );

    this.handleError(error);

    return data ?? [];

  }

}