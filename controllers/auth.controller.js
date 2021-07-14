const db = require("../config/config");
const User = db.user;
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/jwt");

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