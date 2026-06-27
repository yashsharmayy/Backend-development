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
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Result</title>
</head>
<body>
    <h1>Your sum is ${result}</h1>
</body>
</html>
`);
    console.log(result);
    return res.end();
  });
};
module.exports = sumRequestHanler;
