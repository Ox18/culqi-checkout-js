const express = require("express");
const setupControllers = require("./controllers");

const setupApp = async () => {
  const app = express();

  const controllers = await setupControllers();
  console.log(controllers);

  return app;
};

module.exports = setupApp;
