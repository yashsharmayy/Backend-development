const express = require("express");
const connectDB = require("./db/db");
const noteModel = require("./model/noteModel");
const NoteRouter = require("./Routes/noteRoute");

const app = express();

app.use(express.json());

app.use(NoteRouter);

connectDB();
const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`server is running on http://localhost:${PORT}`);
});

// get(recieve)
// app.get("/note", (req, res) => {
//   res.status(201).json({
//     message: "Note received",
//     notes: notes,
//   });
// });
//post(send)
// app.post("/note", (req, res) => {
//   console.log(req.body);
//   notes.push(req.body);

//   res.status(201).json({
//     message: "Note received",
//     data: req.body,
//   });
//   console.log(notes);
// });
//delete
// app.delete("/note/:index", (req, res) => {
//   const index = req.params.index;
//   delete notes[index];
//   res.status(200).json({
//     message: "not deleted successfully",
//   });
// });
//patch(upgrade)

// app.patch("/notes/:index", (req, res) => {
//   const index = req.params.index;
//   const name = req.body.name;
//   notes[index].name = name;
//   res.status(200).json({
//     message: "updated successfully",
//     notes: notes,
//   });
// });
