const express = require("express");
const noteController = require("../controller/noteController");

const NoteRouter = express.Router();

NoteRouter.post("/notes", noteController.postNote);
NoteRouter.get("/notes", noteController.getNote);
NoteRouter.delete("/notes/:id", noteController.deleteNote);
NoteRouter.patch("/notes/:id", noteController.patchNote);

module.exports = NoteRouter;
