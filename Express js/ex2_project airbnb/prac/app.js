const express = require("express");
const path = require("path");

//local module
const userRoute = require("./Routes/userRoute");
const contactRoute = require("./Routes/contactRoute");
const urlencoded = require("body-parser/urlencoded");

const app = express();
app.use(express.urlencoded());
app.use(userRoute);
app.use(contactRoute);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
