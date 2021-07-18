const express = require('express');
const { check } = require("express-validator");
const { JWTValidate } = require('../middleware/JWTValidate');
const router = express.Router();
const user = require("../controllers/user.controller");

// Create a new user
router.post("/api/user", [
  check('name', 'Este campo es obligatorio').not().isEmpty(),
  check('email', 'Este campo es obligatorio').not().isEmpty(),
  check('email', 'El correo no es valido').isEmail(),
  check('password', 'Este campo es obligatorio').not().isEmpty(),
  check('password', 'El password debe tener mas de 3 caracteres').isLength({ min: 3 }),
], user.create);

// Retrieve all user
router.get("/api/user", [JWTValidate], user.findAll);

// Retrieve a single user by Id
router.get("/api/user/:userId", [JWTValidate], user.findByPk);

// Update a user with Id
router.put("/api/user/:userId", [
  check('name', 'Este campo es obligatorio').not().isEmpty(),
  check('email', 'Este campo es obligatorio').not().isEmpty(),
  check('email', 'El correo no es valido').isEmail(),
  check('password', 'Este campo es obligatorio').not().isEmpty(),
  check('password', 'El password debe tener mas de 3 caracteres').isLength({ min: 3 }),
], user.update);

// Delete a user with Id
router.delete("/api/user/:userId", [JWTValidate], user.delete);

module.exports = router;
