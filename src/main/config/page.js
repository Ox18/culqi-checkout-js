const env = require("./env")

const page = (app) => {
  app.get("/", (req, res) => {
    res.render("index", { 
      CULQI_PUBLIC_KEY: env.public_key
     });
  });
};

module.exports = page;