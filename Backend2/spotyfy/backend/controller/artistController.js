const artistModel = require("../model/artist.model");
const jwt = require("jsonwebtoken");
const uploadFile = require("../service/storage.service");
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
  const file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await artistModel.create({
    uri: result.url,
    title,
    artist: decoded.id,
  });
  res.status(201).json({
    message: "Music created successfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
};
