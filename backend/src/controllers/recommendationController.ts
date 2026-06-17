import { Request, Response } from "express";

export const getRecommendations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({
      success: true,
      recommendations: [
        {
          title: "AI Hackathon",
          category: "AI",
          date: "2026-06-25",
          venue: "Main Auditorium",
        },
        {
          title: "React Workshop",
          category: "Web Development",
          date: "2026-06-20",
          venue: "Lab 3",
        },
        {
          title: "Cyber Security Seminar",
          category: "Security",
          date: "2026-06-28",
          venue: "Seminar Hall",
        },
        {
          title: "Cloud Computing Bootcamp",
          category: "Cloud",
          date: "2026-07-02",
          venue: "Conference Hall",
        },
        {
          title: "Data Science Workshop",
          category: "Data Science",
          date: "2026-07-05",
          venue: "Lab 5",
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch recommendations",
    });
  }
};