import { Request, Response } from "express";
import Notification from "../models/Notification";

export const getNotifications = async (
  req: Request,
  res: Response
) => {
  try {
    const notifications =
      await Notification.find().sort({
        createdAt: -1,
      });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch notifications",
    });
  }
};

export const createNotification = async (
  req: Request,
  res: Response
) => {
  try {
    const notification =
      await Notification.create(req.body);

    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create notification",
    });
  }
};