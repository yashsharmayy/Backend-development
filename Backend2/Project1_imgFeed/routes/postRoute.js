const express = require("express");
const multer = require("multer");
const postController = require("../controller/postController");
const postRouter = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/create_post", postController.postCreatePost);

module.exports = postRouter;
