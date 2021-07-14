module.exports = function (app) {
  const auth = require("../controllers/auth.controller");
  app.post("/api/login", auth.create);
}