const path = require("path");
const fs = require("fs");

const controllersPath = path.join(__dirname, "../../presentation/controllers");

const capture = async () => {
  const controllers = [];
  const files = await fs.promises.readdir(controllersPath);
  files.forEach((file) => {
    if (file.includes(".controller.js")) {
      const controller = require(path.join(controllersPath, file));
      controllers.push(controller);
    }
  });

  return controllers;
};

module.exports = capture;
