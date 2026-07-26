const noteModel = require("../model/noteModel");

exports.postNote = async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "note created",
  });
};
exports.getNote = async (req, res) => {
  try {
    const notes = await noteModel.find();
    //find = [{},{}]
    //findOne = {},null

    res.status(201).json({
      notes: notes,
    });
  } catch (error) {
    console.log("note not found", error);
  }
};
exports.deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    await noteModel.findOneAndDelete(id);
    //     {
    //   _id: id,
    // };
    res.status(200).json({
      message: "note deleted successfully",
    });
  } catch (error) {
    console.log("note not found", error);
  }
};
exports.patchNote = async (req, res) => {
  try {
    const id = req.params.id;
    const description = req.body.description;
    await noteModel.findByIdAndUpdate(
      { _id: id },
      { description: description },
      { new: true },
    );
    res.status(200).json({
      message: "note updated successfully",
    });
  } catch (error) {
    console.log("note not found", error);
  }
};
