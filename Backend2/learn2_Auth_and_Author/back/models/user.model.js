const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("User", UserSchema);

exports.model = userModel;
