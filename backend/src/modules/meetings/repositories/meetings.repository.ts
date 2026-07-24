import { BaseRepository } from "@/shared/database/BaseRepository";

import {
  AttendanceDto,
  CreateMeetingDto,
  UpdateMeetingDto,
} from "../types/meetings.types";

export class MeetingsRepository extends BaseRepository {

  /**
   * ============================================================================
   * Create Meeting
   * ============================================================================
   */
  async createMeeting(

    createdBy: string,

    dto: CreateMeetingDto,

  ) {

    const { data, error } =

      await this.db

        .from("meetings")

        .insert({

          group_id: dto.groupId,

          title: dto.title,

          description:

            dto.description ?? null,

          location: dto.location,

          meeting_date:

            dto.meetingDate,

          created_by: createdBy,

        })

        .select()

        .single();

    this.handleError(error);

    return data;

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

    const { data, error } =

      await this.db

        .from("meetings")

        .update({

          title: dto.title,

          description:

            dto.description,

          location: dto.location,

          meeting_date:

            dto.meetingDate,

          minutes: dto.minutes,

          status: dto.status,

        })

        .eq("id", meetingId)

        .select()

        .single();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Find Meeting
   * ============================================================================
   */
  async findById(

    meetingId: string,

  ) {

    const { data, error } =

      await this.db

        .from("meetings")

        .select("*")

        .eq("id", meetingId)

        .maybeSingle();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Group Meetings
   * ============================================================================
   */
  async findGroupMeetings(

    groupId: string,

  ) {

    const { data, error } =

      await this.db

        .from("meetings")

        .select("*")

        .eq("group_id", groupId)

        .order(

          "meeting_date",

          {

            ascending: true,

          },

        );

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Delete Meeting
   * ============================================================================
   */
  async deleteMeeting(

    meetingId: string,

  ) {

    const { error } =

      await this.db

        .from("meetings")

        .delete()

        .eq("id", meetingId);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Record Attendance
   * ============================================================================
   */
  async recordAttendance(

    dto: AttendanceDto,

  ) {

    const { data, error } =

      await this.db

        .from("meeting_attendance")

        .insert({

          meeting_id:

            dto.meetingId,

          member_id:

            dto.memberId,

          status:

            dto.status,

          checked_in_at:

            new Date().toISOString(),

        })

        .select()

        .single();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Update Attendance
   * ============================================================================
   */
  async updateAttendance(

    dto: AttendanceDto,

  ) {

    const { data, error } =

      await this.db

        .from("meeting_attendance")

        .update({

          status:

            dto.status,

          checked_in_at:

            new Date().toISOString(),

        })

        .eq("meeting_id", dto.meetingId)

        .eq("member_id", dto.memberId)

        .select()

        .single();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Attendance List
   * ============================================================================
   */
  async getAttendance(

    meetingId: string,

  ) {

    const { data, error } =

      await this.db

        .from("meeting_attendance")

        .select("*")

        .eq("meeting_id", meetingId);

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Save Minutes
   * ============================================================================
   */
  async saveMinutes(

    meetingId: string,

    minutes: string,

  ) {

    const { data, error } =

      await this.db

        .from("meetings")

        .update({

          minutes,

        })

        .eq("id", meetingId)

        .select()

        .single();

    this.handleError(error);

    return data;

  }

}