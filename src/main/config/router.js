const logger = require("../../shared/libs/logger");

const router = (app, controllers) => {
  controllers.forEach((controller) => {
    const { route, method, handler } = controller;
    logger.info(`Attaching controller for [${method.toUpperCase()}] ${route}`);
    app[method](route, handler);
  });
};

module.exports = router;
