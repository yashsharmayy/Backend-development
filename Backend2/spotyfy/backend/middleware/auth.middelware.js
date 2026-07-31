const jwt = require("jsonwebtoken");

exports.authArtist = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({
        message: "user unautherized 1",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "you are not an artist",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      message: "user unautherized 2",
    });
  }
};
exports.authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(req.cookies);
    if (!token) {
      return res.status(403).json({
        message: "user unautherized 3",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "user") {
      return res.status(403).json({
        message: "use are not a user",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      message: "user unautherized 4",
    });
  }
};
