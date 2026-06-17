import { Request, Response } from "express";

import Attendance from "../models/Attendance";

export const markAttendance = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      eventId,
      userId,
      latitude,
      longitude,
    } = req.body;

    const attendance =
      await Attendance.create({
        eventId,
        userId,
        latitude,
        longitude,
        qrVerified: true,
      });

    res.status(201).json({
      success: true,
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getAttendanceByEvent =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const attendance =
        await Attendance.find({
          eventId: req.params.eventId,
        })
          .populate("userId");

      res.status(200).json({
        success: true,
        attendance,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error,
      });
    }
  };
/*
getIO().emit("attendanceMarked", {
  eventId,
  userId,
  message: "New attendance recorded",
});
*/