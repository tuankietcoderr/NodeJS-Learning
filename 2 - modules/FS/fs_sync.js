const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("../../content/subfolder/test.txt", "utf8");
const second = readFileSync("../../content/subfolder/test2.txt", "utf8");

writeFileSync(
  "../../content/subfolder/result_sync.txt",
  "Here is the result: " + first + " and " + second,
  { flag: "a" }
);
