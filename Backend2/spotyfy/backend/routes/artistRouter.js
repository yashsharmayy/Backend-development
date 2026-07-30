const express = require("express");
const artistController = require("../controller/artistController");
const multer = require("multer");
const artistRouter = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});
artistRouter.post(
  "/artist",
  upload.single("music"),
  artistController.createMusic,
);

module.exports = artistRouter;
