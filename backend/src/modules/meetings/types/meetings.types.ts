/**
 * ============================================================================
 * Create Meeting DTO
 * ============================================================================
 */

export interface CreateMeetingDto {

  groupId: string;

  title: string;

  description?: string;

  location: string;

  meetingDate: string;

}

/**
 * ============================================================================
 * Update Meeting DTO
 * ============================================================================
 */

export interface UpdateMeetingDto {

  title?: string;

  description?: string;

  location?: string;

  meetingDate?: string;

  minutes?: string;

  status?: string;

}

/**
 * ============================================================================
 * Attendance DTO
 * ============================================================================
 */

export interface AttendanceDto {

  meetingId: string;

  memberId: string;

  status: string;

}

/**
 * ============================================================================
 * Meeting DTO
 * ============================================================================
 */

export interface MeetingDto {

  id: string;

  groupId: string;

  title: string;

  description: string | null;

  location: string;

  meetingDate: string;

  status: string;

  minutes: string | null;

  createdBy: string;

  createdAt: string;

}

/**
 * ============================================================================
 * Attendance Record DTO
 * ============================================================================
 */

export interface AttendanceRecordDto {

  memberId: string;

  status: string;

  checkedInAt: string | null;

}