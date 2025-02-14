import fs from "fs";
import http from "http";
import url from "url";

const PORT = 3007;

http
  .createServer((req, res) => {
    const fullpath = url.parse(req.url, true);
    let queries = fullpath.query;

    if (fullpath.path === "/") {
      res.write("<h1>Welcome to Bread and Butter</h1>");
      fs.readFile("./data/home.js", (err, data) => {
        if (err) {
          res.write("<p>Something went wrong</p>");
        } else {
          res.write(data);
        }
      });
    } else if (fullpath.path === "/buns") {
      fs.readFile("./data/navMain.js", (err, data) => {
        if (err) {
          res.write("<p>Something went wrong</p>");
        } else {
          res.write(data);
        }
      });
    }
  })
  .listen(PORT, () =>
    console.log(`🥐 Connecting on port ${PORT} ➡️ http://localhost:${PORT}`)
  );
