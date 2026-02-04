const fs = require("fs");

fs.open("file.txt", "r+", (err, fd) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.write(fd, "NODE", 0, "utf8", (err) => {
    if (err) console.error(err);

    fs.close(fd, () => {});
  });
});
