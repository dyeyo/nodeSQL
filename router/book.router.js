const express = require('express');

const { check } = require('express-validator');
const { JWTValidate } = require('../middleware/JWTValidate')
const router = express.Router();
const book = require("../controllers/book.controller");

// Create a new book
router.post("/api/book", [
  JWTValidate,
  check('name', 'Este campo es obligatorio').not().isEmpty(),
  check('price', 'Este campo es obligatorio').not().isEmpty(),
  check('language', 'El correo no es valido').not().isEmpty(),
  check('total_pages', 'Este campo es obligatorio').not().isEmpty(),
], book.create);

// Retrieve all book
router.get("/api/book", book.findAll);

// Retrieve a single book by Id
router.get("/api/book/:bookId", book.findByPk);

// Update a book with Id
router.put("/api/book/:bookId", [
  JWTValidate,
  check('name', 'Este campo es obligatorio').not().isEmpty(),
  check('price', 'Este campo es obligatorio').not().isEmpty(),
  check('language', 'El correo no es valido').not().isEmpty(),
  check('total_pages', 'Este campo es obligatorio').not().isEmpty(),
], book.update);

// Delete a book with Id
router.delete("/api/book/:bookId", [JWTValidate], book.delete);

module.exports = router;
