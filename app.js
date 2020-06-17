const express = require("express");
const { user, backend, frontend } = require("./scr/database/api");
const app = express();

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send(
    "Homepage to the api, visit one of these for api requests\napi/userInformation\napi/backendInformation\napi/frontendInformation"
  );
});

app.get("/api/user", (req, res) => {
  res.json(user());
});

app.get("/api/backend", (req, res) => {
  res.json(backend());
});

app.get("/api/frontend", (req, res) => {
  res.json(frontend());
});

app.get("*", (req, res) => {
  res.send("Error 404, page not found");
});

app.listen(8000, () => {
  console.log("Loading the back-end server on port 8000!");
});
