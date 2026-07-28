const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log("Mongo URI:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected!");
    console.log("Ready State:", mongoose.connection.readyState);
  } catch (err) {
    console.log("MongoDB Error:", err.message);
  }
}

module.exports = connectDB;
