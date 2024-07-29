const path = require("path");
const express = require("express");

const directory = (app) => {
  const dir = path.join(__dirname + "../../../../", "public")
  console.log(dir)
  app.use(express.static(dir));
};

module.exports = directory;
