const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

getText("../content/subfolder/test.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
