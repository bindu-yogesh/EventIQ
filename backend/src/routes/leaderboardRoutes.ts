import express from "express";

import {
  getLeaderboard,
  awardPoints,
} from "../controllers/leaderboardController";

import authMiddleware from "../middleware/auth";

const router = express.Router();

router.get("/", getLeaderboard);

router.post(
  "/award",
  authMiddleware,
  awardPoints
);

export default router;
