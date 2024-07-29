const express = require("express");
const setupControllers = require("./controllers");
const setupRouter = require("./router");
const setupMiddleware = require("./middleware");
const setupEngne = require("./engine")
const setupDirectory = require("./directory")
const setupPage = require("./page")

const setupApp = async () => {
  const app = express();

  setupEngne(app)
  setupDirectory(app)
  setupMiddleware(app);

  const controllers = await setupControllers();
  setupRouter(app, controllers);
  setupPage(app)

  return app;
};

module.exports = setupApp;
