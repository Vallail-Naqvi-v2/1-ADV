import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected : ${conn.connection.host}`);
  } catch (error) {
    console.log("Error Connecting to mongodb", error);
  }
};

export default connectMongoDB;