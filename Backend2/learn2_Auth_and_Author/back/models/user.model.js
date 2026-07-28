const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
