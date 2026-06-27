const sumRequestHanler = require("./sum");
let useRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
<html>

            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Calculator</title>
            </head>
            <body>
                 <h1>hey welcome to calculator</h1>
                 <h2>click below for calculator </h2>
                 <h2><a href="/calculator">Calculator</a></h2>
            </body>
            </html>
            `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html>

            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <form action="/calculate-result" method="POST">
                <input type="number" name="num1" placeholder="Enter Number" /><br />
                <input type="number" name="num2" placeholder="Enter Number" /><br />
                <button type="submit">Sum</button>
                </form>
            </body>
            </html>
            `);
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return sumRequestHanler(req, res);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html>

            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <h1>404</h1>
            </body>
            </html>
            `);
    return res.end();
  }
};
module.exports = useRequestHandler;
