const { log } = require("console");
const http = require("http");
const fs = require("fs");

// function requestListner(req,res){
//     console.log(req);

// }
// http.createServer(requestListner)

// or
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>node js </title></head>");

    res.write("<body>");
    res.write("<h1>Student Form</h1>");

    res.write(`
    <form action="/submit" method="POST">
      <label>Name:</label><br>
      <input type="text" name="username"><br><br>

      <label>Email:</label><br>
      <input type="email" name="email"><br><br>

      <button type="submit">Submit</button>
    </form>
  `);

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url == "/product") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>node js </title></head>");
    res.write("<body><h1>This is product section</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLocaleLowerCase() === "/submit" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user.txt", "yash sharma");
    res.statusCode = 302;
    res.setHeader("Location", "/submitted");
  } else if (req.url == "/submitted") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>node js </title></head>");
    res.write("<body><h1>Form submited successfully</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>node js </title></head>");
    res.write("<body><h1>Hello students</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server running address http://localhost:5000/`);
});
