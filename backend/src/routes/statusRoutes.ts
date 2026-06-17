import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    app: "EventIQ",
    version: "1.0.0",
    status: "Running",
    features: [
      "JWT Authentication",
      "Event Creation",
      "Event Registration",
      "QR Attendance",
      "Attendance Tracking",
      "Feedback System",
      "Notifications",
      "Certificate Generation",
      "Dashboard Analytics",
      "AI Event Description Generator",
      "AI Success Prediction",
      "AI Sentiment Analysis",
      "AI Event Recommendations",
      "Waitlist & Auto Promotion",
      "Leaderboard & Gamification",
      "Email Notifications",
      "Real-Time Notifications"
    ],
    techStack: {
      frontend: "React + TypeScript + Tailwind",
      backend: "Node.js + Express + TypeScript",
      database: "MongoDB",
      ai: "Gemini AI",
      auth: "JWT"
    }
  });
});

export default router;