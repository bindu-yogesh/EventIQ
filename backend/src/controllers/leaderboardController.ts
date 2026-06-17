import { Request, Response } from "express";
import User from "../models/User";

export const getLeaderboard = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({
    success: true,
    leaderboard: [
      {
        rank: 1,
        name: "Rahul",
        department: "CSE",
        attendancePoints: 1200,
        badges: ["Campus Legend"],
      },
      {
        rank: 2,
        name: "Ananya",
        department: "ISE",
        attendancePoints: 1050,
        badges: ["Event Champion"],
      },
      {
        rank: 3,
        name: "Kiran",
        department: "ECE",
        attendancePoints: 900,
        badges: ["Active Participant"],
      },
    ],
  });
};

export const awardPoints = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, points } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    user.attendancePoints += points;

    // Badges
    if (
      user.attendancePoints >= 500 &&
      !user.badges.includes("Campus Legend")
    ) {
      user.badges.push("Campus Legend");
    } else if (
      user.attendancePoints >= 250 &&
      !user.badges.includes("Event Champion")
    ) {
      user.badges.push("Event Champion");
    } else if (
      user.attendancePoints >= 100 &&
      !user.badges.includes("Active Participant")
    ) {
      user.badges.push("Active Participant");
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Points awarded",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};