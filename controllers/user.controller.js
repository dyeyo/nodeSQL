const db = require("../config/config");
const User = db.user;
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/jwt");

exports.findAll = (req, res) => {
  user.findAll().then((users) => {
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


exports.login = async (req, res) => {

  const { id, email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  const validatePassword = bcryptjs.compareSync(password, user.password)

  if (!validatePassword || user === null) {
    return res.status(400).json({
      msg: "Datos incorectos"
    })
  } else {

    const token = await generarJWT(user.id);

    res.status(200).json({
      status: true,
      user,
      token,
      message: "user logeado",
    });
  }
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


