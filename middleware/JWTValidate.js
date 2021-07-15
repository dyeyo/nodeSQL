const jwt = require('jsonwebtoken');
const db = require("../config/config");
const User = db.user;
const env = require('../config/env')

const JWTValidate = async (req, res, netx) => {

  const token = req.header('x-token')
  if (!token) {
    return res.status(401).json({
      msg: 'Token no existe'
    })
  }

  try {
    const { id } = jwt.verify(token, env.token);
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        msg: 'user no existe'
      })
    }
    req.body = user

  } catch (error) {
    console.log('ERROR', error);
    return res.status(401).json({
      msg: 'No autorizado'
    })
  }
  netx();

}

module.exports = {
  JWTValidate
}