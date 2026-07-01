const http = require("http");
const userHandler = require("./user");
const express = require("express");

const server = http.createServer((req, res) => {
  userHandler();
});

const PORT = "3002";
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
