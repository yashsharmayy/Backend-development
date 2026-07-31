const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.registerUser = async (req, res) => {
  try {
    const { userName, email, password, role = "user" } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
      $or: [
        {
          userName,
        },
        {
          email,
        },
      ],
    });
    if (isUserAlreadyExists) {
      return res.status(490).json({
        message: "user already exists",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      userName,
      email,
      password: hash,
      role,
    });

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // for localhost only
    });

    res.status(200).json({
      message: "user created successfully",
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
        password: user.password,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("user cannot created");
  }
};
exports.LoginUser = async (req, res) => {
  const { userName, email, password, role = "user" } = req.body;

  const user = await userModel.findOne({
    // $or: [{ userName }, { email }],
    email,
  });

  if (!user) {
    return res.status(409).json({
      message: "user not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(409).json({
      message: "incorrect password",
    });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // for localhost only
  });

  res.status(202).json({
    message: "user login successfully",
    user: {
      id: user._id,
      userName: user.userName,
      email: user.email,
      password: user.password,
      role: user.role,
    },
  });
};
exports.Logoutuser = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.status(200).json({ message: "user logged out successfully" });
};
