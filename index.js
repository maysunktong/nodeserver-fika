import fs from "fs";
import http from "http";
import url from "url";

const PORT = process.env.PORT || 3007;

http
  .createServer((req, res) => {
    const fullpath = url.parse(req.url, true);
    let queries = fullpath.query;

    if (fullpath.path === "/") {
      res.write("<h1>Welcome to Bread and Butter</h1>");
      res.write("<li><a href='/buns'>Buns</a></li>");
      res.write("<li><a href='/coffee'>Coffee</a></li>");
      res.write("<li><a href='/sandwiches'>Sandwiches</a></li>");
      res.write(`<div> Swedish fika bread is an essential part of Sweden's beloved coffee break
      tradition, known as *fika*. These sweet, spiced, and often buttery
      pastries accompany coffee and conversation, creating a cozy social
      experience. Popular varieties include *kanelbullar* (cinnamon buns),
      *kardemummabullar* (cardamom buns), and semla.
      Made with enriched dough, often flavored with cardamom, cinnamon, or
      vanilla, these treats are soft, aromatic, and slightly sticky from sugar
      glazes or pearl sugar toppings. Fika bread is more than just a snack; it
      represents warmth, hospitality, and the Swedish love for slowing down and
      enjoying life's small pleasures.</div>`);
    } else if (fullpath.path.includes("buns")) {
      res.write("<h1>Our Buns</h1>");
      fs.readFile("./data/menu.js", (err, data) => {
        if (err) {
          res.write("<p>Something went wrong</p>");
        } else {
          res.write(`<div>${data}</div>`);
        }
        res.write("<a href='./buns?name=kanelbullar'>Kanelbullar</a>");
        res.write(
          "<a href='./buns?name=kardemummabullar'>Kardemummabullar</a>"
        );
        res.write("<a href='./buns?name=semla'>Semla</a>");
      });

      if (queries.name === "kanelbullar") {
        fs.readFile("./data/kanelbullar.txt", (err, data) => {
          if (err) {
            res.write("<p>Something went wrong</p>");
          } else {
            res.write(`<div>${data}</div>`);
          }
        });
      }

      if (queries.name === "kardemummabullar") {
        fs.readFile("./data/kardemummabullar.txt", (err, data) => {
          if (err) {
            res.write("<p>Something went wrong</p>");
          } else {
            res.write(`<div>${data}</div>`);
          }
        });
      }

      if (queries.name === "semla") {
        fs.readFile("./data/semla.txt", (err, data) => {
          if (err) {
            res.write("<p>Something went wrong</p>");
          } else {
            res.write(`<div>${data}</div>`);
          }
        });
      }
    } else if (fullpath.path.includes("coffee")) {
      res.write("<h1>Our Coffee</h1>");
      fs.readFile("./data/menu.js", (err, data) => {
        if (err) {
          res.write("<p>Something went wrong</p>");
        } else {
          res.write(`<div>${data}</div>`);
        }
      });
      fs.readFile("./data/coffee.js", (err, data) => {
        if (err) {
          res.write("<p>Something went wrong</p>");
        } else {
          res.write(`<div>${data}</div>`);
        }
      });
    } else if (fullpath.path.includes("sandwiches")) {
      res.write("<h1>Our Sandwiches</h1>");
      fs.readFile("./data/menu.js", (err, data) => {
        if (err) {
          res.write("<p>Something went wrong</p>");
        } else {
          res.write(`<div>${data}</div>`);
          res.write("<a href='./sandwiches?name=sandwiches'>Sandwiches</a>");
        }
      });

      if (queries.name === "sandwiches") {
        fs.readFile("./data/sandwiches.txt", (err, data) => {
          if (err) {
            res.write("<p>Something went wrong</p>");
          } else {
            res.write(`<div>${data}</div>`);     
          }
        });
      }
      
    } else {
      fs.readFile("./data/404.js", (err, data) => {
        if (err) {
          res.write("<p>Something went wrong</p>");
        } else {
          res.write(`<div>${data}</div>`);
        }
      });
    }
  })
  .listen(PORT, () =>
    console.log(`🥐 Connecting on port ${PORT} ➡️ http://localhost:${PORT}`)
  );
