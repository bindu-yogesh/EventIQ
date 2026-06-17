import { Request, Response } from "express";
import { sendEmail } from "../services/emailService";

export const sendEventReminder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, eventName } = req.body;

    await sendEmail(
      email,
      "Event Reminder",
      `Reminder: ${eventName} starts soon!`
    );

    res.status(200).json({
      success: true,
      message: "Reminder sent",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};