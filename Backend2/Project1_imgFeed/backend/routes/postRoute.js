const express = require("express");
const multer = require("multer");
const postController = require("../controller/postController");
const postRouter = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

postRouter.post(
  "/create_post",
  upload.single("image"),
  postController.postCreatePost,
);
postRouter.get("/posts", postController.getCreatePost);
postRouter.delete("/posts/:id", postController.deletePost);
postRouter.patch("/posts/:id", postController.updatePost);
module.exports = postRouter;
