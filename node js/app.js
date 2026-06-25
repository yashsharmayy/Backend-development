const http = require("http");
const useRequestHandler = require("./server1");

let server = http.createServer(useRequestHandler);

let PORT = 3002;

server.listen(PORT, () => {
  console.log(`server is running http://localhost:3002/`);
});
