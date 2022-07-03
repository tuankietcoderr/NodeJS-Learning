const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is main page");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
  console.log(req.url);
});

server.listen(5000);
