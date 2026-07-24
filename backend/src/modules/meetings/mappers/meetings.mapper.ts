import {
    Meeting,
    MeetingResponseDto,
  } from '../types/meetings.types';
  
  export function toMeetingDto(
    meeting: Meeting,
  ): MeetingResponseDto {
  
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