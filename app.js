const http = require("http");
const fs = require("fs");

// function rqListener(req, res) {}

// // this function will run everytime it is requested
// http.createServer(rqListener);

// ES6 version can also use function rather than above
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text name="message"><button type="submit">Send</button></input></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from NodeJS!</body></h1>");
  res.write("</html>");
  res.end();
});

// tell the server to listen for requests on Port 3000
server.listen(3000);
