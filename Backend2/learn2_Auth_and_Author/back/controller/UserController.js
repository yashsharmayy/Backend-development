const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
exports.registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  const user = await userModel.create({
    userName,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "user registered successfully",
    token,
    user,
  });
};
exports.create_post = async (req, res) => {
  console.log(req.body);
  console.log(req.cookies);

  const token = req.cookies.token;

  try {
    if (!token) {
      return res.status(401).json({
        message: "unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decoded.id,
    });
    console.log(user);
  } catch (error) {
    console.log("token problem", error);
  }
  res.send("post created successfully");
};
