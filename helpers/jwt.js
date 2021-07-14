const jwt = require('jsonwebtoken')
const env = require("../config/env");

const generarJWT = (id = '') => {

  return new Promise((resolve, reject) => {

    // gewnerar jwt
    // lo que se va a guardar en ej token
    const payload = { id }
    jwt.sign(payload, env.token, {
      expiresIn: '4h',
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject('No se pudo generar el token')
      } else {
        resolve(token)
      }
    })

  })
}

module.exports = {
  generarJWT
}