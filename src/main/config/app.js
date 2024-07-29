const express = require("express");
const setupControllers = require("./controllers");
const setupRouter = require("./router");
const middleware = require("./middleware");

const setupApp = async () => {
  const app = express();

  middleware(app);

  const controllers = await setupControllers();
  setupRouter(app, controllers);

  return app;
};

module.exports = setupApp;
