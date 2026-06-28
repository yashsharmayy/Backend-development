const http = require("http");
const testingSyntax = require("./syntax");
const runtime = require("./runtime");
const logicalerror = require("./logicalerror");
const pracadebugg = require("./pracdebugg");

const server = http.createServer((req, res) => {
  console.log(req.url);
  testingSyntax();
  runtime();
  logicalerror();
  // pracadebugg();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`);
});
