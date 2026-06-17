import express from "express";

import {
  createEvent,
  getEvents,
  registerForEvent,
} from "../controllers/eventController";

import authMiddleware from "../middleware/auth";

const router = express.Router();

router.get("/", getEvents);

router.post(
  "/create",
  authMiddleware,
  createEvent
);

router.post(
  "/register/:eventId",
  authMiddleware,
  registerForEvent
);

export default router;