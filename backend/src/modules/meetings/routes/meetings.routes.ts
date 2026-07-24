import { Router } from "express";

import { authMiddleware } from "@/middleware/auth.middleware";

import {

  createMeeting,
  deleteMeeting,
  getAttendance,
  getGroupMeetings,
  getMeeting,
  recordAttendance,
  saveMinutes,
  updateAttendance,
  updateMeeting,

} from "../controllers/meetings.controller";

const router = Router();

/**
 * ============================================================================
 * Meetings
 * ============================================================================
 */

router.post(

  "/",

  authMiddleware,

  createMeeting,

);

router.get(

  "/group/:groupId",

  authMiddleware,

  getGroupMeetings,

);

router.get(

  "/:id",

  authMiddleware,

  getMeeting,

);

router.put(

  "/:id",

  authMiddleware,

  updateMeeting,

);

router.delete(

  "/:id",

  authMiddleware,

  deleteMeeting,

);

/**
 * ============================================================================
 * Attendance
 * ============================================================================
 */

router.get(

  "/:id/attendance",

  authMiddleware,

  getAttendance,

);

router.post(

  "/attendance",

  authMiddleware,

  recordAttendance,

);

router.put(

  "/attendance",

  authMiddleware,

  updateAttendance,

);

/**
 * ============================================================================
 * Minutes
 * ============================================================================
 */

router.put(

  "/:id/minutes",

  authMiddleware,

  saveMinutes,

);

export default router;