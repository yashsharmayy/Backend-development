const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected successfully");
  } catch (err) {
    console.log("MongoDB Error:", err.message);
  }
}

module.exports = connectDB;
