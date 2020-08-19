const http = require("http");

// function rqListener(req, res) {}

// // this function will run everytime it is requested
// http.createServer(rqListener);

// ES6 version can also use function rather than above
const server = http.createServer((req, res) => {
  console.log(req);
});

// tell the server to listen for requests on Port 3000
server.listen(3000);
