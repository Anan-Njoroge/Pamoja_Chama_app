export interface CreateGroupDto {

    name: string;
  
    description?: string;
  
    currency: string;
  
    meetingDay?: string;
  
    meetingTime?: string;
  
  }
  
  export interface GroupDto {
  
    id: string;
  
    name: string;
  
    description: string | null;
  
    currency: string;
  
    meetingDay: string | null;
  
    meetingTime: string | null;
  
    createdBy: string;
  
  }