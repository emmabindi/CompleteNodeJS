// routes / & /users
// / = greeting and form with username input: submit POST to create-user
// / = return list of users
// create-user log the incoming data and redirect to /

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Username</title><head>");
    res.write("<h1>Enter Username</h1>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></input></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const username = parsedBody.split("=")[1];
      console.log(`Username: ${username}`);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Assignment</title><head>");
    res.write("<body><h1>Username List</h1><ul>Bob</ul><ul>Billie</ul></body>");
    res.write("</html>");
    res.end();
  }
  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>Node Assignment</title><head>");
  // res.write("</html>");
  // res.end();
};

module.exports = requestHandler;
