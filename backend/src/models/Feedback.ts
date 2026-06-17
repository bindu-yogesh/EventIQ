import mongoose, { Schema, Document } from "mongoose";

export interface IFeedback extends Document {
  eventId: mongoose.Types.ObjectId;

  userId: mongoose.Types.ObjectId;

  rating: number;

  comment: string;

  sentiment: "positive" | "neutral" | "negative";
}

const FeedbackSchema = new Schema<IFeedback>(
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

    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },

    comment: {
      type: String,
      required: true,
    },

    sentiment: {
      type: String,
      enum: ["positive", "neutral", "negative"],
      default: "neutral",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IFeedback>(
  "Feedback",
  FeedbackSchema
);