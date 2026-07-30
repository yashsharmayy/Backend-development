const express = require("express");
const artistController = require("../controller/artistController");
const multer = require("multer");

const authMiddlware = require("../middleware/auth.middelware");
const artistRouter = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});
artistRouter.post(
  "/artist",
  authMiddlware.authArtist,
  upload.single("music"),
  artistController.createMusic,
);
artistRouter.post(
  "/album",
  authMiddlware.authArtist,
  artistController.createAlbum,
);
artistRouter.get("/", authMiddlware.authUser, artistController.getMusic);
artistRouter.get("/albums", authMiddlware.authUser, artistController.getAlbums);
module.exports = artistRouter;
