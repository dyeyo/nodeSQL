module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'book',
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      language: DataTypes.STRING,
      total_pages: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    { timestamps: false }
  );

  Book.associate = function (models) {
    Book.belongsTo(models.Book, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return Book;
};