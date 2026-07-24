import { ContributionDto } from "./contributions.types";

export interface ContributionResponse {

  success: boolean;

  message: string;

  data: ContributionDto;

}

export interface ContributionsResponse {

  success: boolean;

  data: ContributionDto[];

}

export interface ContributionSummaryResponse {

  success: boolean;

  data: {

    totalAmount: number;

    totalRecords: number;

  };

}