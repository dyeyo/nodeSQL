module.exports = function (app) {

  const book = require("../controllers/book.controller");

  // Create a new book
  app.post("/api/book", book.create);

  // Retrieve all book
  app.get("/api/book", book.findAll);

  // Retrieve a single book by Id
  app.get("/api/book/:bookId", book.findByPk);

  // Update a book with Id
  app.put("/api/book/:bookId", book.update);

  // Delete a book with Id
  app.delete("/api/book/:bookId", book.delete);
};