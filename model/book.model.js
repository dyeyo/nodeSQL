const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    name: {
      type: DataTypes.STRING(100)
    },
    price: {
      type: DataTypes.INTEGER,
    },
    language: {
      type: DataTypes.STRING(100),
    },
    total_pages: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false
  });

  return Book;
}