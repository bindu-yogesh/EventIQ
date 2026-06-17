import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;

  category: string;

  venue: string;

  date: Date;

  organizer: mongoose.Types.ObjectId;

  capacity: number;

  registeredUsers: mongoose.Types.ObjectId[];

  waitlistUsers: mongoose.Types.ObjectId[];

  attendees: mongoose.Types.ObjectId[];

  tags: string[];

  department: string;

  qrEnabled: boolean;

  geofenceEnabled: boolean;

  latitude?: number;

  longitude?: number;

  radius?: number;

  successScore: number;

  feedbackCount: number;

  averageRating: number;

  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    venue: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    organizer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    capacity: {
      type: Number,
      default: 100,
    },

    registeredUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    waitlistUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    tags: [
      {
        type: String,
      },
    ],

    department: {
      type: String,
      default: "General",
    },

    qrEnabled: {
      type: Boolean,
      default: true,
    },

    geofenceEnabled: {
      type: Boolean,
      default: false,
    },

    latitude: Number,

    longitude: Number,

    radius: {
      type: Number,
      default: 100,
    },

    successScore: {
      type: Number,
      default: 0,
    },

    feedbackCount: {
      type: Number,
      default: 0,
    },

    averageRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IEvent>("Event", EventSchema);