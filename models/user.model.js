module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: DataTypes.STRING(100),
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING(100),
    },
    { timestamps: false }
  );

  User.associate = function (models) {
    User.hasMany(models.Book, {
      foreignKey: 'userId',
    });
  };

  return User;
}