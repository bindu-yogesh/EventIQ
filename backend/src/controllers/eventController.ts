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
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create event",
      error,
    });
  }
};

export const getEvents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const events = await Event.find();

    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch events",
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
        success: false,
        message: "Event not found",
      });
      return;
    }

    event.registeredUsers.push(userId);

    await event.save();

    res.status(200).json({
      success: true,
      message: "Registered successfully",
      event,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Registration failed",
      error,
    });
  }
};