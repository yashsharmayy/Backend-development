const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected!");
    console.log("Ready State:", mongoose.connection.readyState);
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
