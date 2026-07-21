const mongoose = require("mongoose");

// const { getDB } = require("../../airbnb_mongoDb/utils/databaseUtil");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is requried"],
  },
  lastName: String,
  email: {
    type: String,
    required: [true, "email is requried"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is requried"],
  },
  userType: {
    type: String,
    enum: ["guest", "host"],
    default: "guest",
  },
});

module.exports = mongoose.model("User", userSchema);
