const { JWTValidate } = require('../middleware/JWTValidate')

module.exports = function (app) {

  const book = require("../controllers/book.controller");

  // Create a new book
  app.post("/api/book", [
    JWTValidate,
    check('name', 'Este campo es obligatorio').not().isEmpty(),
    check('price', 'Este campo es obligatorio').not().isEmpty(),
    check('language', 'El correo no es valido').not().isEmpty(),
    check('total_pages', 'Este campo es obligatorio').not().isEmpty(),
  ], book.create);

  // Retrieve all book
  app.get("/api/book", book.findAll);

  // Retrieve a single book by Id
  app.get("/api/book/:bookId", book.findByPk);

  // Update a book with Id
  app.put("/api/book/:bookId", [
    JWTValidate,
    check('name', 'Este campo es obligatorio').not().isEmpty(),
    check('price', 'Este campo es obligatorio').not().isEmpty(),
    check('language', 'El correo no es valido').not().isEmpty(),
    check('total_pages', 'Este campo es obligatorio').not().isEmpty(),
  ], book.update);

  // Delete a book with Id
  app.delete("/api/book/:bookId", [JWTValidate], book.delete);
};