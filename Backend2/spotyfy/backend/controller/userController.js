const userModel = require("../model/user.model");

exports.registerUser = async (req, res) => {
  try {
    const { userName, email, password, role = "user" } = req.body;
    console.log(req.body);
  } catch (error) {}
};
