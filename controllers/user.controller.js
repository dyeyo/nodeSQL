const db = require("../config/config");
const User = db.user;
const bcryptjs = require('bcryptjs');

exports.findAll = (req, res) => {
  User.findAll().then((users) => {
    res.status(200).json({
      status: true,
      data: users,
    });
  });
}

exports.create = (req, res) => {

  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt)
  User.create(user.dataValues).then((user) => {
    res.status(200).json({
      status: true,
      user,
      message: "user creado",
    });
  });
};

exports.findByPk = (req, res) => {
  user.findByPk(req.params.userId).then((user) => {
    res.status(200).json({
      status: true,
      data: user,
    });
  });
};

exports.update = (req, res) => {
  const id = req.params.userId;
  user.update(req.body,
    { where: { id: req.params.userId } }
  ).then(() => {
    res.status(200).json({
      status: true,
      message: "user updated successfully with id = " + id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.userId;
  user.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
      status: true,
      message: "user deleted successfully with id = " + id
    });
  });
};


