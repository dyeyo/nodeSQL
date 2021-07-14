const db = require("../config/config");
const Book = db.book;

exports.findAll = (req, res) => {
  Book.findAll().then((books) => {
    res.status(200).json({
      status: true,
      data: books,
    });
  });
}

exports.create = (req, res) => {
  Book.create(req.body).then((book) => {
    res.status(200).json({
      status: true,
      message: "Book creado",
    });
  });
};


exports.findByPk = (req, res) => {
  Book.findByPk(req.params.bookId).then((book) => {
    res.status(200).json({
      status: true,
      data: book,
    });
  });
};

exports.update = (req, res) => {
  const id = req.params.bookId;
  Book.update(req.body,
    { where: { id: req.params.bookId } }
  ).then(() => {
    res.status(200).json({
      status: true,
      message: "Book updated successfully with id = " + id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.bookId;
  Book.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
      status: true,
      message: "Book deleted successfully with id = " + id
    });
  });
};
