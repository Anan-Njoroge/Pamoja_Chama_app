export interface GroupReportHeader {

    id: string;
  
    name: string;
  
    logo_url: string | null;
  
    location: string | null;
  
    currency: string;
  
  }
  
  export interface ContributionReportRow {
  
    member: string;
  
    contributionType: string;
  
    amount: number;
  
    paymentMethod: string;
  
    paymentDate: string;
  
    status: string;
  
  }
  
  export interface MemberReportRow {
  
    member: string;
  
    role: string;
  
    status: string;
  
    joinedAt: string;
  
  }