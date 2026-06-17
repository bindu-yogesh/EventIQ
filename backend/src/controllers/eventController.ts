import { Request, Response } from "express";
import Event from "../models/Event";

export const createEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const event = await Event.create(req.body);

    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getEvents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({
      success: true,
      events: [
        {
          id: 1,
          title: "React Workshop",
          date: "2026-06-20",
          attendees: 120,
        },
        {
          id: 2,
          title: "AI Hackathon",
          date: "2026-06-25",
          attendees: 200,
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const registerForEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { eventId, userId } = req.body;

    const event = await Event.findById(eventId);

    if (!event) {
      res.status(404).json({
        message: "Event not found",
      });
      return;
    }

    event.registeredUsers.push(userId);

    await event.save();

    res.status(200).json({
      success: true,
      message: "Registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};