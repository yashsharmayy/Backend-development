const mongoose = require("mongoose");

const albumSechma = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  musics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artist",
      required: true,
    },
  ],
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});
const albumModel = mongoose.model("album", albumSechma);
module.exports = albumModel;
