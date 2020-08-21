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
