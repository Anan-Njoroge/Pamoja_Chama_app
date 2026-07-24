import { AppError } from '@/shared/errors/AppError';

import { MeetingsRepository } from '../repositories/meetings.repository';

import { toMeetingDto } from '../mappers/meetings.mapper';

import {
  AttendanceDto,
  CreateMeetingDto,
  UpdateMeetingDto,
} from '../types/meetings.types';

import { NotificationsService } from '@/modules/notifications/services/notifications.service';

export class MeetingsService {

  constructor(

    private readonly repository =
      new MeetingsRepository(),

    private readonly notifications =
      new NotificationsService(),

  ) {}

  /**
   * ============================================================================
   * Create Meeting
   * ============================================================================
   */
  async createMeeting(

    creatorId: string,

    dto: CreateMeetingDto,

  ) {

    const meeting =
      await this.repository.createMeeting(

        creatorId,

        dto,

      );

    /**
     * Notify every member.
     */
    await this.notifications.createGroupNotification(

      dto.groupId,

      'meeting_created',

      'New Meeting Scheduled',

      `${dto.title} has been scheduled.`,

    );

    return toMeetingDto(
      meeting,
    );

  }

  /**
   * ============================================================================
   * Get Meeting
   * ============================================================================
   */
  async getMeeting(
    meetingId: string,
  ) {

    const meeting =
      await this.repository.findById(
        meetingId,
      );

    return toMeetingDto(
      meeting,
    );

  }

  /**
   * ============================================================================
   * Group Meetings
   * ============================================================================
   */
  async getMeetings(
    groupId: string,
  ) {

    const meetings =
      await this.repository.findByGroup(
        groupId,
      );

    return meetings.map(
      toMeetingDto,
    );

  }

  /**
   * ============================================================================
   * Upcoming Meetings
   * ============================================================================
   */
  async getUpcomingMeetings(
    groupId: string,
  ) {

    const meetings =
      await this.repository.findUpcoming(
        groupId,
      );

    return meetings.map(
      toMeetingDto,
    );

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

    const meeting =
      await this.repository.findById(
        meetingId,
      );

    if (
      meeting.status === 'cancelled'
    ) {

      throw new AppError(

        'Cancelled meetings cannot be updated.',

        400,

      );

    }

    const updated =
      await this.repository.updateMeeting(

        meetingId,

        dto,

      );

    return toMeetingDto(
      updated,
    );

  }

  /**
   * ============================================================================
   * Cancel Meeting
   * ============================================================================
   */
  async cancelMeeting(
    meetingId: string,
  ) {

    const meeting =
      await this.repository.findById(
        meetingId,
      );

    if (
      meeting.status === 'completed'
    ) {

      throw new AppError(

        'Completed meetings cannot be cancelled.',

        400,

      );

    }

    const updated =
      await this.repository.updateMeeting(

        meetingId,

        {

          status: 'cancelled',

        },

      );

    /**
     * Notify group members.
     */
    await this.notifications.createGroupNotification(

      updated.group_id,

      'meeting_cancelled',

      'Meeting Cancelled',

      `${updated.title} has been cancelled.`,

    );

    return toMeetingDto(
      updated,
    );

  }

  /**
   * ============================================================================
   * Complete Meeting
   * ============================================================================
   */
  async completeMeeting(

    meetingId: string,

    minutes?: string,

  ) {

    const updated =
      await this.repository.updateMeeting(

        meetingId,

        {

          status: 'completed',

          minutes,

        },

      );

    /**
     * Notify group members.
     */
    await this.notifications.createGroupNotification(

      updated.group_id,

      'meeting_completed',

      'Meeting Completed',

      `${updated.title} has been completed.`,

    );

    return toMeetingDto(
      updated,
    );

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

    const meeting =
      await this.repository.findById(
        meetingId,
      );

    if (
      meeting.status === 'cancelled'
    ) {

      throw new AppError(

        'Attendance cannot be recorded for a cancelled meeting.',

        400,

      );

    }

    return this.repository.recordAttendance(

      meetingId,

      dto,

    );

  }

  /**
   * ============================================================================
   * Attendance List
   * ============================================================================
   */
  async getAttendance(
    meetingId: string,
  ) {

    return this.repository.getAttendance(
      meetingId,
    );

  }

}