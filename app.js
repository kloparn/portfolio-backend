const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8000, () => {
  console.log("Loading the back-end server on port 8000!");
});
