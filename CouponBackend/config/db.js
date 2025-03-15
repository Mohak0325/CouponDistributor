const mongoose = require("mongoose");

const URL = 'mongodb+srv://mohak25jain:9sCgUcPGA8k4zFp2@cluster0.i6kpe.mongodb.net/coupons';

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("✅ MongoDB Connected!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
