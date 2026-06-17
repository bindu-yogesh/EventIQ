import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      email,
      password,
      department,
    } = req.body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      res.status(400).json({
        message: "User already exists",
      });
      return;
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      department,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const login = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {
      res.status(401).json({
        message: "Invalid credentials",
      });
      return;
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};