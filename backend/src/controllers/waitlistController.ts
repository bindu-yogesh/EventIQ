import { Request, Response } from "express";
import Event from "../models/Event";

export const joinWaitlist = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { eventId, userId } = req.body;

    const event = await Event.findById(eventId);

    if (!event) {
      res.status(404).json({
        success: false,
        message: "Event not found",
      });
      return;
    }

    // Check if already registered
    if (
      event.registeredUsers.includes(userId as any)
    ) {
      res.status(400).json({
        success: false,
        message: "Already registered",
      });
      return;
    }

    // Check if already waitlisted
    if (
      event.waitlistUsers.includes(userId as any)
    ) {
      res.status(400).json({
        success: false,
        message: "Already in waitlist",
      });
      return;
    }

    event.waitlistUsers.push(userId);

    await event.save();

    res.status(200).json({
      success: true,
      message: "Added to waitlist",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const promoteFromWaitlist = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { eventId } = req.body;

    const event = await Event.findById(eventId);

    if (!event) {
      res.status(404).json({
        success: false,
        message: "Event not found",
      });
      return;
    }

    if (
      event.registeredUsers.length >=
      event.capacity
    ) {
      res.status(400).json({
        success: false,
        message: "No seats available",
      });
      return;
    }

    if (event.waitlistUsers.length === 0) {
      res.status(400).json({
        success: false,
        message: "Waitlist empty",
      });
      return;
    }

    const promotedUser =
      event.waitlistUsers.shift();

    if (promotedUser) {
      event.registeredUsers.push(
        promotedUser
      );
    }

    await event.save();

    res.status(200).json({
      success: true,
      message:
        "User promoted successfully",
      promotedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};