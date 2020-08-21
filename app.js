const http = require("http");
const routes = require("./routes");

// hey server, execute the function that is inside routes on every incoming request
const server = http.createServer(routes);

server.listen(4000);
