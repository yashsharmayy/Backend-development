const console = require("console");
const { log } = require("console");

let sumRequestHanler = (req, res) => {
  console.log("in sum req handler", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodystr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodystr);
    const bodyobj = Object.fromEntries(params);
    let result = Number(bodyobj.num1) + Number(bodyobj.num2);
    res.setHeader("Content-Type", "text/html");
    res.write(`
              <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Result</title>
              </head>
              <body>
                 <h1>your sum is  ${result}</h1>
              </body>
              </html>
              `);
    return res.end();
    console.log(result);
  });
};
module.exports = sumRequestHanler;
