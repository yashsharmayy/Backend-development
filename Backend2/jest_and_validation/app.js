const express = require("express");
const validationRulesMiddlware = require("./middleware/validation.middleware");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hellow world" });
});
app.post("/register", validationRulesMiddlware, (req, res) => {
  const { userName, email, password } = req.body;

  res.status(200).json({
    message: "registered successfully",
    user: {
      userName,
      email,
      password,
    },
  });
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
module.exports = app;
