const express = require("express");
const app = express();

// Set View Engine
app.set("view engine", "ejs");

// GET and render index
app.get("/", (req, res) => {
  res.render("index");
});

// server listen on port 3000
app.listen(3000);
