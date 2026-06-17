import express from "express";
import { sendEventReminder } from "../controllers/emailController";

const router = express.Router();

router.post(
  "/reminder",
  sendEventReminder
);

export default router;