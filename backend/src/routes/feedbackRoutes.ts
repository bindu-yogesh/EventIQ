import express from "express";
import {
  submitFeedback,
  getAllFeedback,
  getEventFeedback,
} from "../controllers/feedbackController";

const router = express.Router();

router.post("/", submitFeedback);

router.get("/", getAllFeedback);

router.get("/:eventId", getEventFeedback);

export default router;