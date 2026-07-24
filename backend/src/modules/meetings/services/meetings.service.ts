import { AppError } from "@/shared/errors/AppError";

import {
  toAttendanceDto,
  toMeetingDto,
} from "../mappers/meetings.mapper";

import { MeetingsRepository } from "../repositories/meetings.repository";

import {
  AttendanceDto,
  CreateMeetingDto,
  UpdateMeetingDto,
} from "../types/meetings.types";

export class MeetingsService {

  constructor(

    private readonly repository =
      new MeetingsRepository(),

  ) {}

  /**
   * ============================================================================
   * Create Meeting
   * ============================================================================
   */
  async createMeeting(

    createdBy: string,

    dto: CreateMeetingDto,

  ) {

    const meeting =

      await this.repository.createMeeting(

        createdBy,

        dto,

      );

    return toMeetingDto(

      meeting,

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

    if (!meeting) {

      throw new AppError(

        "Meeting not found.",

        404,

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

    if (!meeting) {

      throw new AppError(

        "Meeting not found.",

        404,

      );

    }

    return toMeetingDto(

      meeting,

    );

  }

  /**
   * ============================================================================
   * Group Meetings
   * ============================================================================
   */
  async getGroupMeetings(

    groupId: string,

  ) {

    const meetings =

      await this.repository.findGroupMeetings(

        groupId,

      );

    return meetings.map(

      toMeetingDto,

    );

  }

  /**
   * ============================================================================
   * Delete Meeting
   * ============================================================================
   */
  async deleteMeeting(

    meetingId: string,

  ) {

    await this.repository.deleteMeeting(

      meetingId,

    );

    return {

      success: true,

      message:

        "Meeting deleted successfully.",

    };

  }

  /**
   * ============================================================================
   * Attendance
   * ============================================================================
   */
  async recordAttendance(

    dto: AttendanceDto,

  ) {

    const attendance =

      await this.repository.recordAttendance(

        dto,

      );

    return toAttendanceDto(

      attendance,

    );

  }

  async updateAttendance(

    dto: AttendanceDto,

  ) {

    const attendance =

      await this.repository.updateAttendance(

        dto,

      );

    return toAttendanceDto(

      attendance,

    );

  }

  async getAttendance(

    meetingId: string,

  ) {

    const attendance =

      await this.repository.getAttendance(

        meetingId,

      );

    return attendance.map(

      toAttendanceDto,

    );

  }

  /**
   * ============================================================================
   * Minutes
   * ============================================================================
   */
  async saveMinutes(

    meetingId: string,

    minutes: string,

  ) {

    const meeting =

      await this.repository.saveMinutes(

        meetingId,

        minutes,

      );

    return toMeetingDto(

      meeting,

    );

  }

}