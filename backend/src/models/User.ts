import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  department: string;
  role: "student" | "organizer" | "admin";

  interests: string[];

  attendancePoints: number;

  badges: string[];

  eventsAttended: mongoose.Types.ObjectId[];

  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["student", "organizer", "admin"],
      default: "student",
    },

    interests: [
      {
        type: String,
      },
    ],

    attendancePoints: {
      type: Number,
      default: 0,
    },

    badges: [
      {
        type: String,
      },
    ],

    eventsAttended: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", UserSchema);