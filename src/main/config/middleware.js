const morganMiddleware = require("../middlewares/morgan.middleware");
const bodyParser = require("../middlewares/body-parser.middleware");

const middleware = (app) => {
  app.use(morganMiddleware());
  app.use(bodyParser());
};

module.exports = middleware;
