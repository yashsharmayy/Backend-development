const jwt = require("jsonwebtoken");

exports.authArtist = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(403).json({
        message: "user unautherized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      res.status(403).json({
        message: "you are not an artist",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      message: "user unautherized",
    });
  }
};
exports.authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(403).json({
        message: "user unautherized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "user") {
      res.status(403).json({
        message: "use are not a user",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      message: "user unautherized",
    });
  }
};
