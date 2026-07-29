const artistModel = require("../model/artist.model");
const jwt = require("jsonwebtoken");
exports.createMusic = async (req, res) => {
  const token = req.cookie.token;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(401).json({
        message: "you are not an artist",
      });
    }
  } catch (error) {
    return res.status(403).json({
      message: "unauthorized",
    });
  }

  const { title } = req.body;
};
