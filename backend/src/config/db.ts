import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    console.log("Trying to connect...");
    console.log(process.env.MONGO_URI);

    const conn = await mongoose.connect(
      process.env.MONGO_URI as string
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
};

export default connectDB;