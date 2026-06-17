import express from "express";

import {
  generateEventDescription,
  predictEventSuccess,
  analyzeFeedback,
} from "../controllers/aiController";

const router = express.Router();

router.post(
  "/generate-description",
  generateEventDescription
);

router.post(
  "/success-score",
  predictEventSuccess
);

router.post(
  "/sentiment",
  analyzeFeedback
);

export default router;