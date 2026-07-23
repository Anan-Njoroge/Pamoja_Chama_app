import {
    Request,
    Response,
  } from 'express';
  
  import { MeetingsService } from '../services/meetings.service';
  
  export class MeetingsController {
  
    constructor(
  
      private readonly meetingsService =
        new MeetingsService(),
  
    ) {}
  
    /**
     * ============================================================================
     * Create Meeting
     * ============================================================================
     */
    createMeeting = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const meeting =
  
        await this.meetingsService.createMeeting(
  
          req.user!.id,
  
          req.body,
  
        );
  
      res.status(201).json({
  
        success: true,
  
        message: 'Meeting created successfully.',
  
        data: meeting,
  
      });
  
    };
  
    /**
     * ============================================================================
     * Group Meetings
     * ============================================================================
     */
    getMeetings = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const groupId = String(
        req.params.groupId,
      );
  
      const meetings =
  
        await this.meetingsService.getMeetings(
          groupId,
        );
  
      res.json({
  
        success: true,
  
        data: meetings,
  
      });
  
    };
  
    /**
     * ============================================================================
     * Upcoming Meetings
     * ============================================================================
     */
    getUpcomingMeetings = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const groupId = String(
        req.params.groupId,
      );
  
      const meetings =
  
        await this.meetingsService.getUpcomingMeetings(
          groupId,
        );
  
      res.json({
  
        success: true,
  
        data: meetings,
  
      });
  
    };
  
    /**
     * ============================================================================
     * Get Meeting
     * ============================================================================
     */
    getMeeting = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const meetingId = String(
        req.params.id,
      );
  
      const meeting =
  
        await this.meetingsService.getMeeting(
          meetingId,
        );
  
      res.json({
  
        success: true,
  
        data: meeting,
  
      });
  
    };
  
    /**
     * ============================================================================
     * Update Meeting
     * ============================================================================
     */
    updateMeeting = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const meetingId = String(
        req.params.id,
      );
  
      const meeting =
  
        await this.meetingsService.updateMeeting(
  
          meetingId,
  
          req.body,
  
        );
  
      res.json({
  
        success: true,
  
        message: 'Meeting updated successfully.',
  
        data: meeting,
  
      });
  
    };
  
    /**
     * ============================================================================
     * Cancel Meeting
     * ============================================================================
     */
    cancelMeeting = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const meetingId = String(
        req.params.id,
      );
  
      const meeting =
  
        await this.meetingsService.cancelMeeting(
          meetingId,
        );
  
      res.json({
  
        success: true,
  
        message: 'Meeting cancelled.',
  
        data: meeting,
  
      });
  
    };
  
    /**
     * ============================================================================
     * Complete Meeting
     * ============================================================================
     */
    completeMeeting = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const meetingId = String(
        req.params.id,
      );
  
      const meeting =
  
        await this.meetingsService.completeMeeting(
  
          meetingId,
  
          req.body.minutes,
  
        );
  
      res.json({
  
        success: true,
  
        message: 'Meeting completed.',
  
        data: meeting,
  
      });
  
    };
  
    /**
     * ============================================================================
     * Record Attendance
     * ============================================================================
     */
    recordAttendance = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const meetingId = String(
        req.params.id,
      );
  
      const attendance =
  
        await this.meetingsService.recordAttendance(
  
          meetingId,
  
          req.body,
  
        );
  
      res.status(201).json({
  
        success: true,
  
        message: 'Attendance recorded.',
  
        data: attendance,
  
      });
  
    };
  
    /**
     * ============================================================================
     * Attendance List
     * ============================================================================
     */
    getAttendance = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const meetingId = String(
        req.params.id,
      );
  
      const attendance =
  
        await this.meetingsService.getAttendance(
          meetingId,
        );
  
      res.json({
  
        success: true,
  
        data: attendance,
  
      });
  
    };
  
  }