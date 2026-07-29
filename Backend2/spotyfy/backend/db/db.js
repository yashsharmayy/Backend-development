const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("db not connected", error);
  }
}
module.exports = connectDB;
