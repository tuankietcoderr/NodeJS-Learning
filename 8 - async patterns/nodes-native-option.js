const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise(
      "../content/subfolder/test.txt",
      "utf-8"
    );
    await writeFilePromise(
      "../content/subfolder/result_async.txt",
      `This is awesome: ${first}`,
      { flag: "w" }
    );
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};
start();
