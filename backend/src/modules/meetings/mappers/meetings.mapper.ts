import {

  AttendanceRecordDto,
  MeetingDto,

} from "../types/meetings.types";

/**
 * ============================================================================
 * Meeting Mapper
 * ============================================================================
 */

export function toMeetingDto(

  meeting: any,

): MeetingDto {

  return {

    id: meeting.id,

    groupId: meeting.group_id,

    title: meeting.title,

    description: meeting.description,

    location: meeting.location,

    meetingDate: meeting.meeting_date,

    status: meeting.status,

    minutes: meeting.minutes,

    createdBy: meeting.created_by,

    createdAt: meeting.created_at,

  };

}

/**
 * ============================================================================
 * Attendance Mapper
 * ============================================================================
 */

export function toAttendanceDto(

  attendance: any,

): AttendanceRecordDto {

  return {

    memberId:

      attendance.member_id,

    status:

      attendance.status,

    checkedInAt:

      attendance.checked_in_at,

  };

}