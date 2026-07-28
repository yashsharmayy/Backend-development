const mongoose = require("mongoose");

async function mongoDB() {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log("database connection err", error);
  }
}
