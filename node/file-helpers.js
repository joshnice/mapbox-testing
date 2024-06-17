const fs = require("fs");
const path = require("path");

function readFile(name) {
  return new Promise((res, rej) => {
    const filePath = path.join(__dirname, `../input/${name}`);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        rej();
      }
      res(data);
    });
  });
}

module.exports = {
  readFile,
};
