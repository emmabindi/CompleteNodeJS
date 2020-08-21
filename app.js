// // const http = require("http");
// const express = require("express");

// const app = express();

// // middleware:

// app.use((req, res, next) => {
//   console.log("this always runs");
//   next();
// });

// app.use("/add-product", (req, res, next) => {
//   console.log("in the middleware");
//   res.send("<h1>At Product Page</h1>");
// });

// app.use("/", (req, res, next) => {
//   console.log("in the second middleware");
//   res.send("<h1>Hello from Express!</h1>");
// });

// // const server = http.createServer(app);
// // server.listen(4000);
// // In Express the above 2 lines become:

// app.listen(3000);

const express = require("express");
const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>Users Page</h1>");
  res.end();
});

app.use("/", (req, res, next) => {
  res.send("<h1>Dashboard Page</h1>");
  res.end();
});

app.listen(3000);
