const express = require("express");
const app = express();
const { Dinosaure } = require("../models/index");

app.post("/", (req, res) => {
  res.json("test");
});

module.exports = app;
