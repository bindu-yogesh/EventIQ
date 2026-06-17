import express from "express";

import {
  generateCertificate,
} from "../controllers/certificateController";

import authMiddleware from "../middleware/auth";

const router = express.Router();

router.post(
  "/generate",
  authMiddleware,
  generateCertificate
);

export default router;