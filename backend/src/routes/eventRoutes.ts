import express from "express";

import {
  createEvent,
  getEvents,
  registerForEvent,
} from "../controllers/eventController";

const router = express.Router();

router.get("/", getEvents);

router.post(
  "/create",
  createEvent
);

router.post(
  "/register/:eventId",
  registerForEvent
);

export default router;