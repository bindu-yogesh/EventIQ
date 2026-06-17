import express from "express";

import {
  joinWaitlist,
  promoteFromWaitlist,
} from "../controllers/waitlistController";

import authMiddleware from "../middleware/auth";

const router = express.Router();

router.post(
  "/join",
  authMiddleware,
  joinWaitlist
);

router.post(
  "/promote",
  authMiddleware,
  promoteFromWaitlist
);

export default router;