import mongoose, { Schema, Document } from "mongoose";

export interface IAttendance extends Document {
  eventId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;

  checkInTime: Date;

  qrVerified: boolean;

  geoVerified: boolean;

  latitude?: number;

  longitude?: number;
}

const AttendanceSchema = new Schema<IAttendance>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    checkInTime: {
      type: Date,
      default: Date.now,
    },

    qrVerified: {
      type: Boolean,
      default: true,
    },

    geoVerified: {
      type: Boolean,
      default: false,
    },

    latitude: Number,

    longitude: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAttendance>(
  "Attendance",
  AttendanceSchema
);