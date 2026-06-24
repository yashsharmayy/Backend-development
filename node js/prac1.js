const http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Pract nav </title></head>");
    res.write("<body>");
    res.write(`
    <nav>
      <a href="/">Home</a> |
      <a href="/men">Men</a> |
      <a href="/women">Women</a> |
      <a href="/kids">Kids</a>
      <a href="/cart">Cart</a>
    </nav>
    <hr>
  `);
    res.write("<h1>WELCOME TO HOME</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Pract nav </title></head>");
    res.write("<body>");
    return res.end();
    res.write(`
    <nav>
      <a href="/">Home</a> |
      <a href="/men">Men</a> |
      <a href="/women">Women</a> |
      <a href="/kids">Kids</a>
      <a href="/cart">Cart</a>
    </nav>
    <hr>
  `);
    res.write("<h1>WELCOME TO MEN SECTION</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Pract nav </title></head>");
    res.write("<body>");
    res.write(`
    <nav>
      <a href="/">Home</a> |
      <a href="/men">Men</a> |
      <a href="/women">Women</a> |
      <a href="/kids">Kids</a>
      <a href="/cart">Cart</a>
    </nav>
    <hr>
  `);
    res.write("<h1>WELCOME TO WOMEN SECTION</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Pract nav </title></head>");
    res.write("<body>");
    res.write(`
    <nav>
      <a href="/">Home</a> |
      <a href="/men">Men</a> |
      <a href="/women">Women</a> |
      <a href="/kids">Kids</a>
      <a href="/cart">Cart</a>
    </nav>
    <hr>
  `);
    res.write("<h1>WELCOME TO KIDS SECTION</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Pract nav </title></head>");
    res.write("<body>");
    res.write(`
    <nav>
      <a href="/">Home</a> |
      <a href="/men">Men</a> |
      <a href="/women">Women</a> |
      <a href="/kids">Kids</a>
      <a href="/cart">Cart</a>
    </nav>
    <hr>
  `);
    res.write("<h1>WELCOME TO CART SECTION</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Pract nav </title></head>");
    res.write("<body>");
    res.write(`
    <nav>
      <a href="/">Home</a> |
      <a href="/men">Men</a> |
      <a href="/women">Women</a> |
      <a href="/kids">Kids</a>
      <a href="/cart">Cart</a>
    </nav>
    <hr>
  `);
    res.write("<h1>WELCOME TO MEN SECTION</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});

const port = 5001;

server.listen(port, () => {
  console.log(`Server running address http://localhost:5001/`);
});
