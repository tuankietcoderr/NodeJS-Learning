const { readFile, writeFile } = require("fs");

readFile("../../content/subfolder/test.txt", "utf-8", (err, res) => {
  if (err) return console.log(err);
  const first = res;
  readFile("../../content/subfolder/test2.txt", "utf-8", (err, res) => {
    if (err) return console.log(err);
    const second = res;
    writeFile(
      "../../content/subfolder/result_async.txt",
      `The result is : ${first}, ${second}`,
      (err, res) => {
        if (err) return console.log(err);
        console.log(res);
      }
    );
  });
});
