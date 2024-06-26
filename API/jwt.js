var jwt = require('jsonwebtoken');


function createToken(object) {

  object["hash"] = undefined
  object["salt"] = undefined
  object["profile_image_url"] = undefined
  object["favorites"] = undefined

  console.log(object)
  if (object == undefined) {
    return false
  }
  var token = jwt.sign({
    data: object
  }, "secretKeyForToken", { expiresIn: "3d" })
  return token
}

function validateToken(token) {
  try {
    var decoded = jwt.verify(token, 'secretKeyForToken');
    console.log(decoded)
    return true
  } catch (err) {
    console.log("token errato")
    return false
  }
}

module.exports = {
  createToken,
  validateToken
}