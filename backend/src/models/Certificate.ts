import mongoose, { Schema, Document } from "mongoose";

export interface ICertificate extends Document {
  userName: string;
  eventName: string;
  issuedAt: Date;
}

const CertificateSchema = new Schema<ICertificate>({
  userName: {
    type: String,
    required: true,
  },

  eventName: {
    type: String,
    required: true,
  },

  issuedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ICertificate>(
  "Certificate",
  CertificateSchema
);