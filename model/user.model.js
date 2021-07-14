const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING(100)
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
    }
  }, {
    timestamps: false
  });

  return User;
}