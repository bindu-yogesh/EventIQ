import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";

dotenv.config();

const app = express();

// connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "EventIQ Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

import http from "http";
import { initSocket } from "./socket";

const server = http.createServer(app);

initSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import authRoutes from "./routes/authRoutes";
app.use(express.json());
app.use("/api/auth", authRoutes);
import eventRoutes from "./routes/eventRoutes";
app.use("/api/events", eventRoutes);
import attendanceRoutes from "./routes/attendanceRoutes";
app.use(
  "/api/attendance",
  attendanceRoutes
);
import aiRoutes from "./routes/aiRoutes";
app.use("/api/ai", aiRoutes);
import certificateRoutes from "./routes/certificateRoutes";
app.use(
  "/api/certificate",
  certificateRoutes
);
import dashboardRoutes
from "./routes/dashboardRoutes";
app.use(
  "/api/dashboard",
  dashboardRoutes
);
import recommendationRoutes from "./routes/recommendationRoutes";
app.use(
  "/api/recommendations",
  recommendationRoutes
);
import waitlistRoutes from "./routes/waitlistRoutes";
app.use(
  "/api/waitlist",
  waitlistRoutes
);
import leaderboardRoutes from "./routes/leaderboardRoutes";
app.use(
  "/api/leaderboard",
  leaderboardRoutes
);
import emailRoutes from "./routes/emailRoutes";
app.use("/api/email", emailRoutes);
import statusRoutes from "./routes/statusRoutes";
app.use("/api/status", statusRoutes);
import notificationRoutes from "./routes/notificationRoutes";
app.use(
  "/api/notifications",
  notificationRoutes
);
import feedbackRoutes from "./routes/feedbackRoutes";
app.use("/api/feedback", feedbackRoutes);