import { GroupDto } from "../types/groups.types";

export function toGroupDto(
  group: any,
): GroupDto {

  return {

    id: group.id,

    name: group.name,

    description:
      group.description,

    currency:
      group.currency,

    meetingDay:
      group.meeting_day,

    meetingTime:
      group.meeting_time,

    createdBy:
      group.created_by,

    createdAt:
      group.created_at,

  };

}