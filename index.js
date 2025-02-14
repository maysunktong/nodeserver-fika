import http from "http";

const PORT = 3007;

const server = http
  .createServer((req, res) => {
    const path = url.parse(req.url, true);


  })
  .listen(PORT, () =>
    console.log(`🥐 Connecting on port ${PORT} ➡️ http://localhost:3001`)
  );

server();
