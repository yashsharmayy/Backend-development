const uploadFile = require("../services/storgeService");
const postModel = require("../models/postModel");
exports.postCreatePost = async (req, res) => {
  try {
    console.log(req.body);

    console.log("req.file:", req.file);

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption,
    });
    return res.status(201).json({
      message: "post created successfully",
      post: post,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getCreatePost = async (req, res) => {
  try {
    const posts = await postModel.find();
    return res.status(200).json({
      message: "post fetched successfully",
      posts: posts,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const posts = await postModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "deleted  successfully",
      posts: posts,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const caption = req.body.caption;
    const post = await postModel.findByIdAndUpdate(
      id,
      { caption },
      { new: true },
    );
    return res.status(200).json({
      message: "post updated successfully",
      post: post,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};
