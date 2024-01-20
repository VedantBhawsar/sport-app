import mongoose from "mongoose";

if (process.env.MONGODB_URI) {
  throw new Error("Please set MONGODB_DB AND MONGODB_URI ");
}

const connectDatabase = async () => {
  if (!mongoose.connections[0].readyState) {
    const con = await mongoose.connect(
      process.env.MONGODB_URI ??
        "mongodb+srv://admin:admin@cluster0.8fjfi6m.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`MongoDB is Connected with Host: ${con.connection.host}`);
  }
};

export { connectDatabase };
