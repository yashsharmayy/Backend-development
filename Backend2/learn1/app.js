const express = require("express");

const app = express();

app.use(express.json());
const notes = [];

app.get("/note", (req, res) => {
  res.status(201).json({
    message: "Note received",
    notes: notes,
  });
});

app.post("/note", (req, res) => {
  console.log(req.body);
  notes.push(req.body);

  res.status(201).json({
    message: "Note received",
    data: req.body,
  });
  console.log(notes);
});

app.delete("/note/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).json({
    message: "not deleted successfully",
  });
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`server is running on http://localhost:${PORT}`);
});
