const express = require("express");
const { user, backend, frontend } = require("./scr/database/api");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Homepage to the api, visit one of these for api requests\napi/userInformation\napi/backendInformation\napi/frontendInformation"
  );
});

app.get("/api/user", (req, res) => {
  res.json(user);
});

app.get("/api/backend", (req, res) => {
  res.json(backend);
});

app.get("/api/frontend", (req, res) => {
  res.json(frontend);
});

app.get("*", (req, res) => {
  res.send("Error 404, page not found");
});

app.listen(port, () => {
  console.log("Loading the back-end server on ", port);
});
