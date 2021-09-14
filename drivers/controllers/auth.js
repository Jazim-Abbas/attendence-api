const _auth = require("../../data-access/auth");

async function login(req, res) {
  const staff = await _auth.authLogin(req.body);
  res.send({ staff });
}

module.exports = { login };
