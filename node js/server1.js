const { log } = require("console");
const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

let server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="/submit" method="POST">
      <input type="text" name="username" placeholder="Enter Name" /><br />
      <input type="email" name="email" placeholder="Enter Email" /><br />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
            `);
    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
    });
    res.statusCode = 302;
    res.setHeader("location", "/");
    return res.end();
  }
});
let PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running http://localhost:3000/`);
});
