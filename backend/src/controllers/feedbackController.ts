import { Request, Response } from "express";
import Feedback from "../models/Feedback";

export const submitFeedback = async (
  req: Request,
  res: Response
) => {
  try {
    const feedback = await Feedback.create(req.body);

    res.status(201).json({
      success: true,
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
    });
  }
};

export const getAllFeedback = async (
  req: Request,
  res: Response
) => {
  try {
    const feedbacks = await Feedback.find();

    res.status(200).json({
      success: true,
      count: feedbacks.length,
      feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch feedback",
    });
  }
};

export const getEventFeedback = async (
  req: Request,
  res: Response
) => {
  try {
    const { eventId } = req.params;

    const feedbacks = await Feedback.find({
      eventId,
    });

    res.status(200).json({
      success: true,
      feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch event feedback",
    });
  }
};