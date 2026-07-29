const express = require("express");
const artistController = require("../controller/artistController");
const artistRouter = express.Router();

artistRouter.post("/artist", artistController.createMusic);

module.exports = artistRouter;
