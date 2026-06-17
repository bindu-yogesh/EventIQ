import express from "express";

import {
  markAttendance,
  getAttendanceByEvent,
} from "../controllers/attendanceController";

import authMiddleware from "../middleware/auth";

const router = express.Router();

router.post(
  "/mark",
  authMiddleware,
  markAttendance
);

router.get(
  "/:eventId",
  authMiddleware,
  getAttendanceByEvent
);

export default router;