const { error, log } = require("console");

const fs = require("fs");
let data = "yash ji ";

fs.writeFile("output.txt", data, (error) => {
  if (error) console.log("error");
  else console.log("file written sussessfully");
});
