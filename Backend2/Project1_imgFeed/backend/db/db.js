const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.DB_URL);
  console.log("connected to DB");
}
module.exports = connectDB;
