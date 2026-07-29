const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
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

    res.cookie("token", token);

    res.status(200).json({
      message: "user created successfully",
      user: {
        id: user._id,
      },
    });
  } catch (error) {}
};
