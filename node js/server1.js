const { log, error } = require("console");
const fs = require("fs");
const { buffer, json } = require("stream/consumers");
let useRequestHandler = (req, res) => {
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

      const params = new URLSearchParams(fullbody);
      //   const bodyObj = {};
      //   for (const [key, val] of params.entries()) {
      //     bodyObj[key] = val;
      //   }

      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      //poor method
      // fs.writeFileSync("user.txt", JSON.stringify(bodyObj));

      // Good method
      fs.writeFile("user.txt", JSON.stringify(bodyObj), (error) => {
        console.log("Data written successfully");
      });
      res.statusCode = 302;
      res.setHeader("location", "/");
      return res.end();
    });
  }
};

module.exports = useRequestHandler;
