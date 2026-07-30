const artistModel = require("../model/artist.model");
const albumModel = require("../model/album.model");
const jwt = require("jsonwebtoken");
const uploadFile = require("../service/storage.service");
exports.createMusic = async (req, res) => {
  const { title } = req.body;
  const file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await artistModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
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
exports.createAlbum = async (req, res) => {
  try {
    const { title, musicID } = req.body;

    const album = await albumModel.create({
      title,
      artist: req.user.id,
      musics: musicID,
    });

    res.status(201).json({
      message: "album created successfully",
      album: {
        id: album._id,
        title: album.title,
        musics: album.musics,
        artist: album.artist,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};
exports.getMusic = async (req, res) => {
  try {
    const music = await artistModel
      .find()
      .skip(1)
      .limit(12)
      .populate("artist", "userName email");

    res.status(201).json({
      message: "music fetched successfully",
      musics: music,
    });
  } catch (error) {}
};

exports.getAlbums = async (req, res) => {
  try {
    const albums = await albumModel.find().populate("artist", "username email");
    res.status(201).json({
      message: "music fetched successfully",
      albums: albums,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getAlbumById = async (req, res) => {
  try {
    const albumId = req.params.albumId;
    const album = await albumModel
      .findById(albumId)
      .populate("artist", "username email");

    res.status(201).json({
      message: "album fetched successfully",
      album: album,
    });
  } catch (error) {
    console.log(error);
  }
};
