const { check } = require("express-validator");
const { JWTValidate } = require('../middleware/JWTValidate')

module.exports = function (app) {

  const user = require("../controllers/user.controller");

  // Create a new user
  app.post("/api/user", [
    check('name', 'Este campo es obligatorio').not().isEmpty(),
    check('email', 'Este campo es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('password', 'Este campo es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 3 caracteres').isLength({ min: 3 }),
  ], user.create);

  // Retrieve all user
  app.get("/api/user", [JWTValidate], user.findAll);

  // Retrieve a single user by Id
  app.get("/api/user/:userId", [JWTValidate], user.findByPk);

  // Update a user with Id
  app.put("/api/user/:userId", [
    check('name', 'Este campo es obligatorio').not().isEmpty(),
    check('email', 'Este campo es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('password', 'Este campo es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 3 caracteres').isLength({ min: 3 }),
  ], user.update);

  // Delete a user with Id
  app.delete("/api/user/:userId", [JWTValidate], user.delete);
};