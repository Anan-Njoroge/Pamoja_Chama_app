export interface CreateMeetingDto {

  groupId: string;

  title: string;

  description?: string;

  location?: string;

  meetingDate: string;

}

export interface UpdateMeetingDto {

  title?: string;

  description?: string;

  location?: string;

  meetingDate?: string;

  status?: 'scheduled' | 'completed' | 'cancelled';

  minutes?: string;

}

export interface AttendanceDto {

  memberId: string;

  status: 'present' | 'absent' | 'late';

}

export interface Meeting {

  id: string;

  group_id: string;

  title: string;

  description: string | null;

  location: string | null;

  meeting_date: string;

  status: 'scheduled' | 'completed' | 'cancelled';

  minutes: string | null;

  created_by: string;

  created_at: string;

  updated_at: string;

}

export interface MeetingAttendance {

  id: string;

  meeting_id: string;

  member_id: string;

  status: 'present' | 'absent' | 'late';

  checked_in_at: string | null;

}

export interface MeetingResponseDto {

  id: string;

  groupId: string;

  title: string;

  description?: string | null;

  location?: string | null;

  meetingDate: string;

  status: string;

  minutes?: string | null;

  createdBy: string;

  createdAt: string;

}