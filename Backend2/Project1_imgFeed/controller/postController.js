const uploadFile = require("../services/storgeService");
const postModel = require("../models/postModel");
exports.postCreatePost = async (req, res) => {
  try {
    console.log(req.headers["content-type"]);
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption,
    });

    res.send("done");
  } catch (error) {
    console.log("error upload img");
  }
};
