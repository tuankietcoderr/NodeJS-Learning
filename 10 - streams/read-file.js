const { createReadStream } = require("fs");
const stream = createReadStream("../content/subfolder/test.txt", {
  encoding: "utf-8",
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream(path, {highWaterMark: 90000})
// const stream = createReadStream(path, {encoding: "utf-8"})

stream.on("data", (res) => {
  console.log(res);
});
stream.on("error", (err) => console.log(err));
