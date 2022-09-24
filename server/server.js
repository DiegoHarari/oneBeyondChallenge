const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.end("Phone Directory");
});

app.get("/phones", (req, res) => {
  fs.readFile(__dirname + "/" + "phones.json", "utf8", (err, data) => {
    try {
      res.end(data);
    } catch (err) {
      console.log(err);
    }
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
