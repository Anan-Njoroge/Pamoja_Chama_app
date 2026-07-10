export interface CalendarDay {

    id: string;
  
    day: string;
  
    date: number;
  
  }
  
  export interface WeekCalendarProps {
  
    days: CalendarDay[];
  
    selectedDay: string;
  
    onSelectDay: (id: string) => void;
  
  }