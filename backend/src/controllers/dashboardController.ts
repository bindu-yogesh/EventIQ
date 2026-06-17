import { Request, Response } from "express";

export const getDashboardStats = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({
    success: true,
    stats: {
      totalEvents: 12,
      totalUsers: 450,
      totalAttendance: 390,
      attendanceRate: "87%",
      topEvents: [
        {
          title: "AI Hackathon",
          attendees: 200,
        },
        {
          title: "React Workshop",
          attendees: 120,
        },
        {
          title: "Web Development Bootcamp",
          attendees: 70,
        },
      ],
    },
  });
};