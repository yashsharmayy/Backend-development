const http = require("http");
const useRequestHandler = require("./calculator");

const server = http.createServer(useRequestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}/`);
});
