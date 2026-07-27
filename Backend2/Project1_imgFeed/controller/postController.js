const uploadFile = require("../services/storgeService");
const postModel = require("../models/postModel");
exports.postCreatePost = async (req, res) => {
  try {
    console.log("body:", req.body);
    console.log("file:", req.file);
    console.log("files:", req.files);

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption,
    });

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
