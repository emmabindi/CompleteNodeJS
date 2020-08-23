// const http = require("http");
const express = require("express");
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
const app = express();

// global config value
app.set("view engine", "pug");
app.set("views", "views");

// this pkg calls next inside itself. It parses data sent thru forms
app.use(bodyParser.urlencoded({ extended: false }));

// grants access for read only access to items in this folder:
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.render("404", { pageTitle: "Page Not Found" });
});

// const server = http.createServer(app);
// server.listen(4000);
// In Express the above 2 lines become:
app.listen(3000);
