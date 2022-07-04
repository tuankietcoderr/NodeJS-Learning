const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is main page");
  }
  if (req.url === "/about") {
    //! BLOCKING CODE
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        res.write(`${i}-${j}\n`);
      }
    }
    res.end();
  }
  console.log(req.url);
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
