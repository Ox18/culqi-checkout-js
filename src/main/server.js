const dotenv = require("dotenv");
dotenv.config();
const env = require("./config/env");
const logger = require("../shared/libs/logger");
const setupApp = require("./config/app");

(async () => {
  const app = await setupApp();
  app.listen(env.port, () =>
    logger.info(`Server running on http://localhost:${env.port}`)
  );
})();