module.exports = function (app) {

  const user = require("../controllers/user.controller");

  // Create a new user
  app.post("/api/user", user.create);

  // Retrieve all user
  app.get("/api/user", user.findAll);

  // Retrieve a single user by Id
  app.get("/api/user/:userId", user.findByPk);

  // Update a user with Id
  app.put("/api/user/:userId", user.update);

  // Delete a user with Id
  app.delete("/api/user/:userId", user.delete);
};